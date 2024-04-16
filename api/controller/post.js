const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = async (req, res) => {
  const {
    title,
    sector,
    description,
    applicationDeadline,
    requirement,
    salary,
    experience,
    duration,
    postType,
    type,
  } = req.body;
  const userId = req.userId;

  // Fetch the employer associated with the userId
  const employer = await prisma.employer.findFirst({
    where: {
      userId: userId,
    },
  });

  // If no employer is found, return an error
  if (!employer) {
    return res.status(400).json({ error: "No employer found for this user" });
  }

  let post;
  if (postType === "internship") {
    post = await prisma.post.create({
      data: {
        title,
        sector,
        description,
        applicationDeadline,
        requirement,
        duration,
        employerId: employer.id,
        postType,
        type,
      },
    });
  } else if (postType === "job") {
    post = await prisma.post.create({
      data: {
        title,
        sector,
        description,
        applicationDeadline,
        requirement,
        salary,
        experience,
        employerId: employer.id,
        postType,
        type,
      },
    });
    res.status(201).json({ message: "Post created successfully", post });
  } else {
    return res.status(400).json({ error: "Invalid post type" });
  }
};

const updatePost = async (req, res) => {
  const {
    title,
    sector,
    description,
    applicationDeadline,
    requirement,
    salary,
    experience,
    duration,
    postType,
  } = req.body;
  const postId = parseInt(req.params.id);
  const userId = req.userId;

  // Fetch the employer associated with the userId
  const employer = await prisma.employer.findFirst({
    where: {
      userId: userId,
    },
  });

  // If no employer is found, return an error
  if (!employer) {
    return res.status(400).json({ error: "No employer found for this user" });
  }

  let post;
  if (postType === "internship") {
    post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        sector,
        description,
        applicationDeadline,
        requirement,
        duration,
        employerId: employer.id,
        postType,
      },
    });
  } else if (postType === "job") {
    post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        sector,
        description,
        applicationDeadline,
        requirement,
        salary,
        experience,
        employerId: employer.id,
        postType,
      },
    });
  } else {
    return res.status(400).json({ error: "Invalid post type" });
  }

  res.status(200).json({ message: "Post updated successfully", post });
};

const getPostsByEmployer = async (req, res) => {
  const userId = req.userId;

  // Fetch the employer associated with the userId
  const employer = await prisma.employer.findFirst({
    where: {
      userId: userId,
    },
  });

  // If no employer is found, return an error
  if (!employer) {
    return res.status(400).json({ error: "No employer found for this user" });
  }

  const posts = await prisma.post.findMany({
    where: {
      employerId: employer.id,
    },
  });

  res.status(200).json(posts);
};

module.exports = {
  createPost,
  updatePost,
  getPostsByEmployer,
};
