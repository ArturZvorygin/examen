const Post = require('../models/Post');

const getPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
};

module.exports = { getPosts };
