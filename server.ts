import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

// config file and database
dotenv.config({ path: './config.env' });
const DB: any = process.env.DATABASE_URL;

// connect to the database
mongoose.connect(DB).then(() => {
  console.log('DB Connected');
});

// open server
const server = app.listen(process.env.PORT, () => {
  const date = new Date().toISOString();
  console.log(`Started server at ${date} on port ${process.env.PORT}`);
});
