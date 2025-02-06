import mongoose from "mongoose";
import Message from "./message.models.js";
import User from '../models/user.model.js'

const conversationalSchema = new mongoose.Schema({
    participants : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Message,
        default:[],
    }]
},
{timestamps:true});

const Conversation = mongoose.model("conversation",conversationalSchema);
export default Conversation;