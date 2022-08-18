// libraries, const
const express = require('express');
const bodyParser = require('body-parser');
//const rateLimit = require('express-rate-limit');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const partyRouter = require('./routes/partyRoutes');
// API Config file located in ./apiConfig.js
const apiConfig = require('./apiConfig'); // /api/v1/

// Init 
const app = express();
const jsonParser = bodyParser.json();

app.use(`${apiConfig}users`, userRouter);
app.use(`${apiConfig}authUser`, authRouter);
app.use(`${apiConfig}party`, jsonParser, partyRouter);

// Middlewares


module.exports = app;
//test