import User from '../models/userModel';
import catchAsync from '../utilities/catchAsync';
import { AppError } from '../utilities/appError';
import signToken from '../utilities/signToken';

export const register = catchAsync(async (req: any, res: any, next: any) => {
  const { name, email, password, confPassword } = req.body;

  const newUser: any = await User.create({
    name: name,
    email: email,
    password: password,
    confPassword: confPassword,
  });

  const token: string = signToken(newUser._id);
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

  const token: string = signToken(user._id);
  user.password = undefined;
  res.status(200).json({
    status: 'Success',
    token,
    user,
  });
});
