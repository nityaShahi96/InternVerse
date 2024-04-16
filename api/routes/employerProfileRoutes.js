const express = require("express");
const employerProfileRouter = express.Router();

const {
  getEmployerProfile,
  updateEmployerProfile,
} = require("../controller/employerProfile");

employerProfileRouter.get("/getEmployerProfile", getEmployerProfile);
employerProfileRouter.put("/updateEmployerProfile", updateEmployerProfile);

module.exports = employerProfileRouter;
