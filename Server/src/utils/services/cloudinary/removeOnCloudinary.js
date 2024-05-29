import {v2 as cloudinary} from 'cloudinary'

const removeOnCloudinary = async(public_id, resource_type) =>{
    if(!public_id) return null;
    try {
        return await cloudinary.uploader.destroy(public_id,{
            resource_type
        })
    } catch (error) {
        console.log("Erron on Removing avatart in cloudinary:",error)
        return null;
    }
}

export default removeOnCloudinary;