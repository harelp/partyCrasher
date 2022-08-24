export = (err: any, req: any, res: any, next: any) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (err.name === 'CastError') {
    res.status(err.statusCode).json({
      status: err.status,
      message: 'Invalid Id',
    });
  } else if (err.code === 11000) {
    res.status(err.statusCode).json({
      status: err.status,
      message: 'Already In Use, Please select a different value',
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }
};
