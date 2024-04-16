const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const applyOnPost = async (req, res) => {
  let { studentId, postId } = req.body;

  // Convert studentId and postId to integers
  studentId = parseInt(studentId);
  postId = parseInt(postId);

  console.log("studentId", studentId);
  console.log("postId", postId);

  try {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });
    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!student || !post) {
      return res.status(400).json({ error: "Student or post not found" });
    }

    const application = await prisma.application.create({
      data: {
        studentId,
        postId,
        status: "Pending", // or whatever initial status you want to set
      },
    });

    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { applyOnPost };
