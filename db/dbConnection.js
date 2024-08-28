const mongoose = require("mongoose");
require('dotenv').config()
// MongoDB connection
const db=mongoose
  .connect(process.env.DATA_BASE)
  .then(() => {
    console.log("Database connected"); 
  })
  .catch(() => {
    console.error("Database Not connected");
  });

  module.exports=db