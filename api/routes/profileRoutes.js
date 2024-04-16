const express = require("express");
const profileRouter = express.Router();

const {
  getStudentProfile,
  getEmployerProfile,
} = require("../controller/profile");

profileRouter.get("/studentProfile", getStudentProfile);
profileRouter.get("/employerProfile", getEmployerProfile);

module.exports = profileRouter;
