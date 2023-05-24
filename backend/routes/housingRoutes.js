const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/userAuth')
const {createPost} = require('../controllers/house/createPost')


// Base URL: /api/house
router.post('/create',verifyToken,createPost)

module.exports = router