const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Create Blog
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  
  const blog = new Blog({ title, content });
  try {
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
