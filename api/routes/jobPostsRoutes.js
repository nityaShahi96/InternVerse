const express = require("express");
const jobPostRouter = express.Router();

const { getJobPosts, getJobPostById } = require("../controller/jobPosts");

jobPostRouter.get("/getJobPosts", getJobPosts);
jobPostRouter.get("/getJobPostById/:id", getJobPostById);

module.exports = jobPostRouter;
