import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();


const createTokenAndSaveCookie = (userId,res)=>{

    const token  = jwt.sign({userId},process.env.JWT_TOKEN,{expiresIn:"5d"});
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    });
}

export default createTokenAndSaveCookie;