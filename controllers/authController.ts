import User from '../models/userModel';
import catchAsync from '../utilities/catchAsync';
import { AppError } from '../utilities/appError';
import { sign, verifyToken } from '../utilities/jwt';

export const register = catchAsync(async (req: any, res: any, next: any) => {
  const { name, email, password, confPassword } = req.body;

  const newUser: any = await User.create({
    name: name,
    email: email,
    password: password,
    confPassword: confPassword,
  });

  const token: string = sign(newUser._id);
  newUser.password = undefined;
  res.status(201).json({
    status: 'Success',
    data: newUser,
    token,
  });
});

export const login = catchAsync(async (req: any, res: any, next: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide Email and Password', 400));
  }
  const user: any = await User.findOne({ email: email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect Email or Password', 401));
  }

  const token: string = sign(user._id);
  user.password = undefined;
  res.status(200).json({
    status: 'Success',
    token,
    user,
  });
});

export const protectedRoute = catchAsync(async (req: any, res: any, next: any) => {
  // INIT TOKEN VAR
  let token: string | undefined;

  // CHECKS IF HEADERS HAS BEARER TOKEN AND SPLITS IT
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // CHECKS IF TOKEN EXISTS
  if (!token) {
    return next(new AppError('Invalid Session, Please login', 401));
  }

  // VERIFIES USER IN DB
  const { id, iat } = await verifyToken(token);
  const verifyUser: any = await User.findById(id);
  if (!verifyUser) {
    return next(new AppError('User does not exist!', 401));
  }

  // CHECKS IF USER CHANGED PASS
  if (verifyUser.changedPassAfter(iat)) {
    return next(new AppError('User changed password, please try again', 401));
  }

  // ACCESS TO PROTECTED ROUTE
  next();
});
