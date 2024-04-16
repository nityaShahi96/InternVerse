const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getJobPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      postType: "job",
    },
    include: {
      employer: true,
    },
  });

  res.status(200).json(posts);
};

const getJobPostById = async (req, res) => {
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
  getJobPosts,
  getJobPostById,
};
