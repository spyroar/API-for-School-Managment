const mongoose = require("mongoose");
require('dotenv').config()
// MongoDB connection
 const db=async()=>{
  try {
       
   const connectURl=await mongoose.connect(`${process.env.DATA_BASE}`)
   if(connectURl)
   {
       console.log("connected dbs !");
   }
   
  } catch (error) {
     console.log("connection failed !",error);
     
  }
}
// const db=mongoose.connect(process.env.DATA_BASE)
//   .then(() => {
//     console.log("Database connected"); 
//   })
//   .catch(() => {
//     console.error("Database Not connected");
//   });

module.exports=db