const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getStudentProfile = async (req, res) => {
  console.log("req.userId:", req.userId); // Log req.userId
  try {
    const profile = await prisma.student.findUnique({
      where: {
        userId: req.userId,
      },
    });

    res
      .status(200)
      .json({ message: "Student profile retrieved successfully", profile });
  } catch (error) {
    console.log("error:", error); // Log the error
    res.status(500).json({ error: "Internal server error" });
  }
};

const getEmployerProfile = async (req, res) => {
  console.log(req.userId);
  try {
    const profile = await prisma.employer.findUnique({
      where: {
        userId: req.userId,
      },
    });

    res.status(200).json({
      message: "Employer profile retrieved successfully",
      profile: profile,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getStudentProfile,
  getEmployerProfile,
};
