const express = require('express')
const { registerUser } = require('../controllers/user/register')
const router = express.Router()
const registerComp = require('../controllers/jobs/registerComp')
const loginComp = require('../controllers/jobs/loginComp')
const addJobs = require('../controllers/jobs/addJobs')
const { verifyToken } = require('../middlewares/userAuth')
const getJobs = require('../controllers/jobs/getJobs')
const getJobsById = require('../controllers/jobs/getJobsById')

//Base URL: /api/jobs
router.post('/register',registerComp);
router.post('/login',loginComp);
router.post('/add',verifyToken,addJobs)
router.get('/',getJobs)
router.get('/:id',verifyToken,getJobsById)

module.exports = router
