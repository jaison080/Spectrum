const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/user/register')
const { loginUser } = require('../controllers/user/login')
const { userDetails } = require('../controllers/user/userDetails')
const { editUserDetails } = require('../controllers/user/editUserDetails')
const { editPassword } = require('../controllers/user/editPassword');
const { deleteUser } = require('../controllers/user/deleteUser');
const {verifyToken} = require('../middlewares/userAuth')
const { storageProfilePic } = require('../utils/cloudinary');
const multer = require('multer');

const upload = multer({ storage: storageProfilePic });



// Base URL: /api/users
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/',verifyToken,userDetails)
router.patch('/edit',verifyToken,upload.single('profilePicture'),editUserDetails)
router.patch('/editpassword',verifyToken,editPassword)
router.delete('/delete',verifyToken,deleteUser)

module.exports = router