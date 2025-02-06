import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        require:true,
        type:String,  
    },
    email:{
        require:true,
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        require:true,
        type:String
    },
    confirmpassword:{
        require:true,
        type:String
    }
},
    {
        timestamps:true,
    }
)

const User  =  mongoose.model("User",userSchema);

export default User;