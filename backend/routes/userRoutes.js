const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/user/register')
const { loginUser } = require('../controllers/user/login')
const { userDetails } = require('../controllers/user/userDetails')
const {verifyToken} = require('../middlewares/userAuth')



// Base URL: /api/users
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/',verifyToken,userDetails)

module.exports = router