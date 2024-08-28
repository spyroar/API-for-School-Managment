const express = require("express");
const { addSchool, listSchool } = require("../controllers/school");
const router = express.Router();

router.route("/addSchool").post(addSchool);
router.route("/listSchools").get(listSchool);

module.exports=router