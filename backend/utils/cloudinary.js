const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'blog-images',
      allowed_formats: ['jpg', 'png'],
    }
});

const storageHouse = new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder:'house-images',
    allowed_formats:['jpg','png'],
  }
})

const storageProfilePic = new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder:'profile-pictures',
    allowed_formats:['jpg','png'],
  }
});
module.exports = {storage:storage,storageHouse:storageHouse, storageProfilePic:storageProfilePic};