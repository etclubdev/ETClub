import express from "express";

import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer';
import { uploadImages } from '../controllers/image.js';
import cloudinary from '../config/cloudinaryConfig.js';

const routerImages = express.Router();
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'etclub-images',
        allowedFormats: ["jpg", "png"],
    },
})
const upload = multer({ storage: storage })
routerImages.post('/', upload.array("images", 10), uploadImages)
export default routerImages