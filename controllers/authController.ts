import User from '../models/userModel';
import catchAsync from '../utilities/catchAsync';

export const register = catchAsync(async (req: any, res: any, next: any) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'Success',
    data: newUser,
  });
});
