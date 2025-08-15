require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
//const multer = require('multer');
//const {storage,storagevideo,storageraw}=require('xyz')
//const upload = multer({ storage: storage })


cloudinary.config({
  cloud_name: process.env.cloudname,
  api_secret: process.env.apisecret,
  api_key: process.env.apikey
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images',
    allowed_formats: ['jpeg', 'png', 'jpg'],
    resource_type: 'image',
    transformation: [{ width: 800, height: 800, crop: 'limit' }]
  }
});




module.exports = {  storage };