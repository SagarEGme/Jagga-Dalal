import bcryptjs from 'bcryptjs';
import User from '../models/user_model.js'

export const signup = async(req,res,next)=>{
    const{username,password,email} = req.body;
    const hashedpw = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedpw});
    try{
        await newUser.save();
        res.status(201).json("user created successfully")
    }
    catch(err){
        next(err)
    }
}