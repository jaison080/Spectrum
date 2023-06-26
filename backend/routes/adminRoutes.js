const express = require('express')
const router = express.Router()
const {approveCompany} = require('../controllers/admin/approveCompany')
const { pendingCompanyApproval } = require('../controllers/admin/pendingCompanyApproval')

//Base URL: /api/admin
router.patch('/approveCompany/:id',approveCompany)
router.get('/pendingCompanyApproval',pendingCompanyApproval)

module.exports = router