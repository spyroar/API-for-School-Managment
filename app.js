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
     res.status(200).send("App is ruuning");
})
app.listen(port, () => {

  console.log(`Server listening on port ${port}`);
});
