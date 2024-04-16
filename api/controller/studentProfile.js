const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateStudentDetails = async (req, res) => {
  const userId = req.userId;

  const {
    first_name,
    last_name,
    phoneNumber,
    designation,
    dob,
    gender,
    aboutYourself,
    address,
    university,
    degree,
    educationStatus,
    skills,
  } = req.body;

  console.log(req.body);

  try {
    const studentExists = await prisma.student.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!studentExists) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Continue with the update operation

    const student = await prisma.student.update({
      where: {
        userId: userId,
      },
      data: {
        first_name: first_name,
        last_name: last_name,
        phoneNumber: phoneNumber,
        designation: designation,
        dob: dob,
        gender: gender,
        aboutYourself: aboutYourself,
        address: address,
        university: university,
        degree: degree,
        educationStatus: educationStatus,
        skills: skills,
      },
    });

    res.status(200).json({ message: "Student details updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getStudentDetails = async (req, res) => {
  const userId = req.userId;

  try {
    const student = await prisma.student.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { updateStudentDetails, getStudentDetails };
