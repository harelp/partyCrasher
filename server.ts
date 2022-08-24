import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

process.on('uncaughtException', (err: any) => {
  console.log('UNHANDLED EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
// config file and database
dotenv.config({ path: './config.env' });
const DB: any = process.env.DATABASE_URL;

// connect to the database
mongoose.connect(DB).then(() => {
  console.log('DB Connected');
});

// open server
const server = app.listen(process.env.PORT, () => {
  const date: string = new Date().toISOString();
  console.log(`Started server at ${date} on port ${process.env.PORT}`);
});

process.on('unhandledRejection', (err: any) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
