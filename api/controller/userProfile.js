const { PrismaClient } = require("@prisma/client");
const { get } = require("../routes/userRoutes");
const prisma = new PrismaClient();

const getUserProfile = async (req, res) => {
  const userId = req.userId;
  const userType = req.userType;
  let profile;
  if (userType === "student") {
    profile = await prisma.student.findUnique({
      where: {
        userId: userId,
      },
    });
  } else {
    profile = await prisma.employer.findUnique({
      where: {
        userId: userId,
      },
    });
  }
  res.json({
    profile,
    userType,
  });
};

module.exports = getUserProfile;
