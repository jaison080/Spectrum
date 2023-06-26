const express = require('express')
const router = express.Router()
const {approveCompany} = require('../controllers/admin/approveCompany')
const { pendingCompanyApproval } = require('../controllers/admin/pendingCompanyApproval')
const { reported } = require('../controllers/admin/reported')
const { suspend } = require('../controllers/admin/suspend')

//Base URL: /api/admin
router.patch('/approveCompany/:id',approveCompany)
router.get('/pendingCompanyApproval',pendingCompanyApproval)
router.get('/reported/:content',reported)
router.patch('/suspend/:content/:id',suspend)

module.exports = router