const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const router = require("./routes/schoolRoute");
const db = require("./db/dbConnection");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.use(router)
app.get('/',(req,res)=>{
     res.status(200).send("Please visit on https://api-for-school-managment.vercel.app/listSchools?latitude=26.764177&longitude=83.076775");
})
app.listen(port, () => {

  console.log(`Server listening on port ${port}`);
});


// shiv123 shivpalyadav