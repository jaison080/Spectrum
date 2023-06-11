const express = require('express')
const { registerUser } = require('../controllers/user/register')
const router = express.Router()
const registerComp = require('../controllers/jobs/registerComp')
const loginComp = require('../controllers/jobs/loginComp')

//Base URL: /api/jobs
router.post('/register',registerComp);
router.post('/login',loginComp);

module.exports = router
