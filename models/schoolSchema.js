const mongoose = require("mongoose");
// School schema
const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: {
      type: { type: String, enum: ["Point"] },
      coordinates: { type: [Number], required: true },
    },
  });


  // School model
const School = mongoose.model("School", schoolSchema);
module.exports=School