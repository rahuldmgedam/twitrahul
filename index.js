import dotenv from 'dotenv';
import express from 'express';
import databaseConnection from './config/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from 'cors';
//import { urlencoded } from 'body-parser';
dotenv.config({
    path:".env"
}) 

databaseConnection();
const app = express();

app.use(express.urlencoded({
    extended:true
}));  


app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3001",
  credentials:true
} 
app.use(cors(corsOptions))

app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)

app.get("/home",(req,res)=>{
     res.status(200).send("<h1>twitter server<h1>")
})

const PORT = process.env.PORTtr || 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});