const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/user/userRegister')

// Base URL: /api/users
router.post('/register', registerUser);

module.exports = router