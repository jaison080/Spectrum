const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/userAuth')
const {createPost} = require('../controllers/house/createPost')
const {storageHouse} = require('../utils/cloudinary')
const multer = require('multer');

const upload = multer({storage:storageHouse});

// Base URL: /api/house
router.post('/create',verifyToken,upload.single('image'),createPost)

module.exports = router