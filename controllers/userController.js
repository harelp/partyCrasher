// exports.updateMe = catchAsync(async (req, res, next) => {
//     // creates error if updating pass
//     if (req.body.password || req.body.passwordConfirm) 
//         return next(new AppError('Please contact admin!', 400));

//     // filter unallowed fields
//     const filteredBody = filterObj(req.body, 'name', 'email');

//     // updates mongo doc
//     const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {new: true, runValidators: true});

//     res.status(200).json({
//         status: 'success',
//         data: {
//             user: updatedUser
//         }
//     })
// });

// exports.deleteMe = catchAsync(async (req, res, next) => {
//     await User.findByIdAndUpdate(req.user.id, {active: false});

//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// });


// exports.updateUser = (req, res, next) => {
  
// };

// exports.deleteUser = (req, res, next) => {
  
// };

// exports.allUsers = catchAsync(async (req, res, next) => {
//     const users = await User.find();

//     res.status(200).json({
//         status: 'success',
//         results: users.length,
//         data: {
//             users
//         }
//     });
// });


exports.updateMe = (req, res, next) => {
  
};

exports.deleteMe = (req, res, next) => {
  
};

exports.updateUser = (req, res, next) => {
  
};

exports.deleteUser = (req, res, next) => {
  
};

exports.allUsers = (req, res, next) => {
  
};