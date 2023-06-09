const express = require('express')
const { registerUser } = require('../controllers/user/register')
const router = express.Router()
const registerComp = require('../controllers/jobs/registerComp')

//Base URL: /api/jobs
router.post('/register',registerComp);

module.exports = router
