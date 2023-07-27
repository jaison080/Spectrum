const express = require('express')
const { registerUser } = require('../controllers/user/register')
const router = express.Router()
const registerCompany = require('../controllers/jobs/registerCompany')
const loginCompany = require('../controllers/jobs/loginCompany')
const addJobs = require('../controllers/jobs/addJobs')
const { verifyToken } = require('../middlewares/userAuth')
const getJobs = require('../controllers/jobs/getJobs')
const getJobsById = require('../controllers/jobs/getJobsById')
const getJobsByCompany = require('../controllers/jobs/getJobsByCompany')
const removeJobs = require('../controllers/jobs/removeJobs')
const { verifyCompany } = require('../middlewares/companyAuth')


//Base URL: /api/jobs
router.post('/register',registerCompany);
router.post('/login',loginCompany);
router.post('/add',verifyCompany,addJobs)
router.get('/by-company',verifyCompany,getJobsByCompany)
router.get('/',verifyToken,getJobs)
router.get('/:id',verifyToken,getJobsById)
router.delete('/:id',verifyCompany,removeJobs)

module.exports = router
