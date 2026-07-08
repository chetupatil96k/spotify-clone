import { User } from "../models/user.model.js"

export const getAllUsers = async (req,res,next) =>{

    try {
        const currentUserId = req.auth.userId;
        if(!currentUserId){
            return res.status(401).json({message:"Unauthorized"})
        }
        const users = await User.find({clerkId:{$ne:currentUserId}});
        res.status(200).json(users)
    }catch (error) {
        console.log("Error in getAllUsers",error);
        next(error);    
    }
}