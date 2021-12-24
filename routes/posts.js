const router = require("express").Router();
const Post = require("../models/Post");

// router.get("/", (req, res) => {
//   res.send("hello from posts side");
// });

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a post

//delete a post
//get a post
//get timeline posts
//like a post
//unlike a post

module.exports = router;
