const express = require("express");
const postRouter = express.Router();

const { createPost, getPostsByEmployer } = require("../controller/post");

postRouter.post("/createPost", createPost);
postRouter.get("/getPostsByEmployer", getPostsByEmployer);

module.exports = postRouter;
