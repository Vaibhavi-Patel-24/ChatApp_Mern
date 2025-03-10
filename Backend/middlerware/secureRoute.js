import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const secureRoute = async(req,res,next)=>{
  try {
    const token = req.cookies?.jwt;
    if(!token){
      return res.status(401).send("Not Authorized")
    }


    let verified;
    try {
      verified = jwt.verify(token, process.env.JWT_TOKEN);
    } catch (err) {
      return res.status(403).json({ message: "Invalid or Expired Token" });
    }


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