const express = require('express')
const router = express.Router()
const {approveCompany} = require('../controllers/admin/approveCompany')
const { pendingCompanyApproval } = require('../controllers/admin/pendingCompanyApproval')
const { reported } = require('../controllers/admin/reported')
const { suspend } = require('../controllers/admin/suspend')
const { login } = require('../controllers/admin/login')
const { verifyAdmin } = require('../middlewares/adminAuth')

//Base URL: /api/admin
router.patch('/approveCompany/:id',verifyAdmin,approveCompany)
router.get('/pendingCompanyApproval',verifyAdmin,pendingCompanyApproval)
router.get('/reported/:content',verifyAdmin,reported)
router.patch('/suspend/:content/:id',verifyAdmin,suspend)
router.post('/login',login)

module.exports = router