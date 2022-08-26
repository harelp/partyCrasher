// libraries
import express from 'express';
import bodyParser from 'body-parser';
import partyRouter from './routes/partyRoutes';
import authRouter from './routes/authRoutes';
import { AppError } from './utilities/appError';
import globalErrorHandler from './controllers/errorController';
// API Config file
import apiConfig from './apiConfig';
//const rateLimit = require('express-rate-limit');

// const userRouter = require('./routes/userRoutes');
//const partyRouter = require('./routes/partyRoutes');

// Init
const app = express();
const jsonParser = bodyParser.json();

// app.use(`${apiConfig}users`, userRouter);
app.use(`${apiConfig}/userAuth`, jsonParser, authRouter);
app.use(`${apiConfig}/party`, jsonParser, partyRouter);

app.all('*', (req: any, res: any, next: any) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Middlewares
app.use(globalErrorHandler);

export default app;
