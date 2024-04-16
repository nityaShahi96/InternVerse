const express = require("express");
const profileRouter = express.Router();

const getUserProfile = require("../controller/userProfile");

profileRouter.get("/profile", getUserProfile);

module.exports = profileRouter;
