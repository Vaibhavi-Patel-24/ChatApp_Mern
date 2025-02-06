import User from "../models/user.model.js";
import bycrypt from 'bcryptjs'
import createTokenAndSaveCookie from '../jwt/generateToken.js'


export const Signup = async(req,res)=>{
    try
    {
        const {name , email ,password , confirmpassword } = req.body;
        if(password != confirmpassword){
            return res.status(400).json({"message":"password does not match"});
        }
        const user =await User.findOne({email});
        if(user){
           return res.status(400).send("user alredy exists");
        }

        //hashing the password
        const hashpassword = await bycrypt.hash(password,10);
        const newUser  = new User({name,email,password:hashpassword});
         await newUser.save()
         if(newUser){
            createTokenAndSaveCookie(newUser._id,res)
             return res.status(200).json({"mes":"user registered successfully",user:{_id:newUser._id,name:newUser.name,email:newUser.email}})
         }
        console.log("user created ")
    }
    catch(err){
        console.log(err);
        res.status(500).send("server error");
    }  
}

export const Login = async (req,res) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        
        const isMatch = await bycrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).send("invalid user or password")
        }
        createTokenAndSaveCookie(user._id,res);
        res.status(200).json({"mes":"user logged in successfully",user:{_id:user._id,name:user.name,email:user.email}});


    }
    catch(err){
        console.log(err);
        res.status(500).send("server error")
    }
}

export const Logout = async(req,res)=>{
    try{
        res.clearCookie('jwt');
        res.status(200).send("user logged out successfully")
    }
    catch(err){
        console.log(err);
        res.status(500).send("server error");
    }
}




export const getUserProfile = async(req,res) =>{
    const loggedInUser = req.user._id;
    try{
        const allUser = await User.find({_id:{$ne:loggedInUser}}).select("-password");
        res.status(201).json({allUser});
    }
    catch(error){
        console.log("Error",+error)
        res.status(500).json({mes:"server error"});


    }
}