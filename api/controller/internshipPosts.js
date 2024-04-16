const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getInternshipPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      postType: "internship",
    },
    include: {
      employer: true,
    },
  });

  res.status(200).json(posts);
};

const getInternshipPostById = async (req, res) => {
  const postId = parseInt(req.params.id);

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      employer: true,
    },
  });

  res.status(200).json(post);
};

module.exports = {
  getInternshipPosts,
  getInternshipPostById,
};
