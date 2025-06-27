const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Post = require('./models/Post');
const posts = require('./data/posts');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Post.deleteMany();
        await Post.insertMany(posts);
        console.log('Посты добавлены!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();
