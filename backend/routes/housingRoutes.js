const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/userAuth')
const {createPost} = require('../controllers/house/createPost')
const {getAllHouses} = require('../controllers/house/getAllHouses')
const {deleteHouse} = require('../controllers/house/deleteHouse')
const {editHouse} = require('../controllers/house/editHouse')
const {storageHouse} = require('../utils/cloudinary')
const multer = require('multer');
const { verify } = require('jsonwebtoken');
const getHouseById = require('../controllers/house/getHouseById');

const upload = multer({storage:storageHouse});

// Base URL: /api/house
router.get('/',getAllHouses)
router.get('/:id',verifyToken,getHouseById);
router.post('/create',verifyToken,upload.any('image'),createPost)
router.delete('/delete/:id',verifyToken,deleteHouse)
router.put('/edit/:id',verifyToken,editHouse);
module.exports = router