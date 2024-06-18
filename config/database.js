import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path:"../config/.env"
})
const databaseConnection = ()=>{
    mongoose.connect("mongodb+srv://rahulgedam95:rg19951997@cluster0.mkrcjf1.mongodb.net/twitter?retryWrites=true&w=majority&appName=Cluster0b ").then(()=>{
        console.log("connected to DB")
    }).catch((error)=>{
        console.log(error)
    })
}

export default databaseConnection;