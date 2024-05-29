import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
const uploadOnCloudinary = async(localFilePath)=>{
try {
    if(!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
        gravity: "auto",
        crop: "auto",
    });
    return response;
} catch (error) {
    // remove local saved file if upload operation failed
    fs.unlinkSync(localFilePath);
    return null;
}
}

export default uploadOnCloudinary;