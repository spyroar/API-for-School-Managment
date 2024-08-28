const mongoose = require("mongoose");
require('dotenv').config()
// MongoDB connection
const db=mongoose
  .connect(process.env.DATA_BASE)
  .then(() => {
    console.log("CONNECTED"); // "Success!"
  })
  .catch(() => {
    console.error("NOT CONNECTED");
  });

  module.exports=db