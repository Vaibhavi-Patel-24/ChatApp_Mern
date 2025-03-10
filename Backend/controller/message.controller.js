import Conversation from "../models/conversation.model.js";
import Message from "../models/message.models.js";
import { getReceiverSocketId } from "../SocketIO/server.js";


export const sendMessage = async (req,res)=>{
    try {
        const {message} =  req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id.toString();
        console.log("senderId",senderId)
        console.log("receiverId",receiverId)

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
                messages: []
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([conversation.save(),newMessage.save()])
        const receiversocketId = getReceiverSocketId(receiverId);
        if(receiversocketId){
            io.to(receiversocketId).emit("newMessage",newMessage);
        }

        return res.status(201).json({message:"Message sent successfully",newMessage})

    } catch (error) {
        console.log("error in sending message"+error)
        res.status(500).send("internal server error")
    }
}

export const getMessage = async(req,res) => {
    try {
        const {id:chatUser} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,chatUser]},
        }).populate("messages");
        if(!conversation){
           return res.status(404).json({mes:"No conversation found"})
        }
        const messages = conversation.messages;
        return res.status(201).json({messages})
    } catch (error) {
        console.log("message getting error")
        res.status(500).send("internal server error")
    }
}