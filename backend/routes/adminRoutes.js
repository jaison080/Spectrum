const express = require('express')
const router = express.Router()
const {approveCompany} = require('../controllers/admin/approveCompany')
const { pendingCompanyApproval } = require('../controllers/admin/pendingCompanyApproval')
const { reported } = require('../controllers/admin/reported')

//Base URL: /api/admin
router.patch('/approveCompany/:id',approveCompany)
router.get('/pendingCompanyApproval',pendingCompanyApproval)
router.get('/reported/:content',reported)

module.exports = router