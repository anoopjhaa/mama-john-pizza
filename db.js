const mongoose = require('mongoose')
require("dotenv").config();

var mongoURL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/pizza';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
  console.log('Mongo DB Connection Successfull')
})

db.on('error', () => {
  console.log(`Mongo DB Connection failed`)
})

module.exports = mongoose
