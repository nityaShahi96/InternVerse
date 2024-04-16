const express = require("express");
const internshipPostRouter = express.Router();

const {
  getInternshipPosts,
  getInternshipPostById,
} = require("../controller/internshipPosts");

internshipPostRouter.get("/getInternshipPosts", getInternshipPosts);
internshipPostRouter.get("/getInternshipPostById/:id", getInternshipPostById);

module.exports = internshipPostRouter;
