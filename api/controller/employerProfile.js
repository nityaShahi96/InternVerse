const { PrismaClient } = require("@prisma/client");
const { use } = require("../routes/userRoutes");
const prisma = new PrismaClient();

const getEmployerProfile = async (req, res) => {
  const userId = req.userId;
  const employerProfile = await prisma.employer.findUnique({
    where: {
      userId: userId,
    },
  });

  res.json({ profile: employerProfile, userType: "employer" });
};

const updateEmployerProfile = async (req, res) => {
  const userId = req.userId;
  const { name, aboutCompany, address, industry, contactDetails } = req.body;
  const updatedEmployerProfile = await prisma.employer.update({
    where: {
      userId: userId,
    },
    data: {
      name,
      aboutCompany,
      address,
      industry,
      contactDetails,
    },
  });
  res.json(updatedEmployerProfile);
};

module.exports = { getEmployerProfile, updateEmployerProfile };
