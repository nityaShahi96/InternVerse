const express = require("express");
const applyRouter = express.Router();

const { applyOnPost } = require("../controller/apply");

applyRouter.post("/", applyOnPost);

module.exports = applyRouter;
