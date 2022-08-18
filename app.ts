// libraries
import express from 'express';
import bodyParser from 'body-parser';

// routes
import partyRouter from './routes/partyRoutes';

// API Config file 
import apiConfig from './apiConfig';
//const rateLimit = require('express-rate-limit');


// const userRouter = require('./routes/userRoutes');
// const authRouter = require('./routes/authRoutes');
//const partyRouter = require('./routes/partyRoutes');

// Init 
const app = express();
const jsonParser = bodyParser.json();

// app.use(`${apiConfig}users`, userRouter);
// app.use(`${apiConfig}authUser`, authRouter);
app.use(`${apiConfig}party`, jsonParser, partyRouter);

// Middlewares


export default app;
//test

// change partycontroller & route to ts