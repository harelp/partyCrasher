const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app'); // express imported from app.js 
const port = 3001;

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true
}).then(con => {
  console.log('DB Connected');
});


// open server
const server = app.listen(port, () => {
    const date = new Date().toISOString();
    console.log(`Started server at ${date} on port ${port}`);
  });
