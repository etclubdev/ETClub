import cloudinary from '../config/cloudinaryConfig.js';


export const uploadImages = async (req, res, next) => {
    try {
        const images = req.files.map((file) => file.path);
        const uploadedImages = [];
        for (let image of images) {
            const results = await cloudinary.uploader.upload(image)
            console.log(results);
            uploadedImages.push({
                url: results.secure_url,
                publicID: results.public_id,
            })
        }
        return res.status(200).json({
            message: "Uploaded images successfully",
            data: uploadedImages
        })
    } catch (err) {
        return res.status(400).json({
            name: err.name,
            message: err.message
        })
    }
}