const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DATABASE_URL;
async function connect() {
  try {
    console.log("URL", URL);
    await mongoose.connect(URL);
    console.log('connect successfully');
  } catch (error) {
    console.log('connect failed');
  }
}
module.exports = { connect };
