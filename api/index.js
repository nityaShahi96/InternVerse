const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");
const logoutRouter = require("./routes/logoutRoutes");
const jwtVerify = require("./middleware/jwtVerify");
// const profileRouter = require("./routes/profileRoutes");
const studentProfileRouter = require("./routes/studentProfileRoutes");
const employerProfileRouter = require("./routes/employerProfileRoutes");
const postRouter = require("./routes/postRoutes");
const internshipPostRouter = require("./routes/intershipPostsRoutes");
const jobPostRouter = require("./routes/jobPostsRoutes");
const applyRouter = require("./routes/applyRoutes");
const profileRouter = require("./routes/userProfileRoute");

app.use("/user", userRouter);
app.use("/post", internshipPostRouter);
app.use("/post", jobPostRouter);
app.use(jwtVerify.verifyToken);

app.use("/student", studentProfileRouter);
app.use("/employer", employerProfileRouter);
app.use("/", profileRouter);
app.use("/logout", logoutRouter);
app.use("/post", postRouter);
app.use("/apply", applyRouter);

app.listen(port, () => {
  console.log("app is running on 4000");
});
