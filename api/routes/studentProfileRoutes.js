const express = require("express");
const studentProfileRouter = express.Router();

const {
  updateStudentDetails,
  getStudentDetails,
} = require("../controller/studentProfile");

studentProfileRouter.put("/updateStudentDetails", updateStudentDetails);
studentProfileRouter.get("/getStudentDetails", getStudentDetails);

module.exports = studentProfileRouter;
