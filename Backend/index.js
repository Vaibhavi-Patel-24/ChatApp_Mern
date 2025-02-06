import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import messageRoute from './routes/message.routes.js'

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 5002
const MONGODB_URI = process.env.MONGODB_URI

try{
    mongoose.connect(MONGODB_URI);
    console.log("Mongodb connected....")
}
catch(err){
    console.log("error:",err)
}

app.use('/api/user',userRoute);
app.use('/api/message',messageRoute);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})