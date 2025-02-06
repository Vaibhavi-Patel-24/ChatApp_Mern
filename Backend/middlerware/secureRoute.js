import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const secureRoute = async(req,res,next)=>{
  try {
    const token = req.cookies.jwt;
    if(!token){
      return res.status(401).send("Not Authorized")
    }
    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    if(!verified){
      return res.status(403).send("Invalid Token")

    }
    const user = await User.findById(verified.userId).select("-password")
    if(!user){
      return res.status(404).send("User Not found")

    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    res.status(500).json({"message":"Internal Server Error"})
  }
}
export default secureRoute;