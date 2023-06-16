const express = require('express')
const router = express.Router()
const {getAllBlogs} = require('../controllers/blogs/getAllBlogs')
const {getBlogById} = require('../controllers/blogs/getBlogById')
const {getBlogsByUser} = require('../controllers/blogs/getBlogsByUser')
const {createBlog} = require('../controllers/blogs/createBlog')
const {editBlog} = require('../controllers/blogs/editBlogs')
const {likeBlog} = require('../controllers/blogs/likeBlog')
const {addComment} = require('../controllers/blogs/addComment')
const {viewComments} = require('../controllers/blogs/viewComments');
const {deleteBlog} = require('../controllers/blogs/deleteBlog')
const {verifyToken} = require('../middlewares/userAuth')
const { storage }  = require('../utils/cloudinary');
const multer = require('multer');

const upload = multer({ storage: storage });

// Base URL: /api/blogs
router.get('/', getAllBlogs);
router.get('/user', verifyToken, getBlogsByUser);
router.post('/create', verifyToken, upload.single('image'), createBlog);
router.put('/edit/:id',verifyToken, upload.single('image'), editBlog);
router.put('/like/:id',verifyToken,likeBlog);
router.put('/addcomment/:id',verifyToken,addComment);
router.get('/comment/:id',verifyToken,viewComments)
router.delete('/delete/:id',verifyToken,deleteBlog);
router.get('/:id', verifyToken, getBlogById);
module.exports = router