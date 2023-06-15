const express = require('express')
const { registerUser } = require('../controllers/user/register')
const router = express.Router()
const registerCompany = require('../controllers/jobs/registerCompany')
const loginCompany = require('../controllers/jobs/loginCompany')
const addJobs = require('../controllers/jobs/addJobs')
const { verifyToken } = require('../middlewares/userAuth')
const getJobs = require('../controllers/jobs/getJobs')
const getJobsById = require('../controllers/jobs/getJobsById')

//Base URL: /api/jobs
router.post('/register',registerCompany);
router.post('/login',loginCompany);
router.post('/add',verifyToken,addJobs)
router.get('/',getJobs)
router.get('/:id',verifyToken,getJobsById)

module.exports = router
