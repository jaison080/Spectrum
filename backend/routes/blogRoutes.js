const express = require('express')
const router = express.Router()
const {getAllBlogs} = require('../controllers/blogs/getAllBlogs')
const {verifyToken} = require('../middlewares/auth')

// Base URL: /api/blogs
router.get('/', verifyToken, getAllBlogs);

module.exports = router