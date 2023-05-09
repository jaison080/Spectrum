const express = require('express')
const router = express.Router()
const {getAllBlogs} = require('../controllers/blogs/getAllBlogs')
const {getBlogsById} = require('../controllers/blogs/getBlogsById')
const {getBlogsByUser} = require('../controllers/blogs/getBlogsByUser')
const {createBlog} = require('../controllers/blogs/createBlog')
const {editBlog} = require('../controllers/blogs/editBlogs')
const {likeBlog} = require('../controllers/blogs/likeBlog')
const {addComment} = require('../controllers/blogs/addComment')
const {viewComments} = require('../controllers/blogs/viewComments');
const {verifyToken} = require('../middlewares/userAuth')
const storage = require('../utils/cloudinary');
const multer = require('multer');
const { verify } = require('jsonwebtoken')

const upload = multer({ storage: storage });

// Base URL: /api/blogs
router.get('/', getAllBlogs);
router.get('/:id', verifyToken, getBlogsById);
router.get('/user', verifyToken, getBlogsByUser);
router.post('/create', verifyToken, upload.single('image'), createBlog);
router.put('/edit',verifyToken, editBlog);
router.put('/like/:id',verifyToken,likeBlog);
router.put('/addcomment/:id',verifyToken,addComment);
router.get('/comment/:id',verifyToken,viewComments)
module.exports = router