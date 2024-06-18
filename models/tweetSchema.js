import mongoose from "mongoose";

const tweetSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    like: { type:Array, default:[] },
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    userDetails:{
      type:Array,
      default:[]
    }, 
    LikedDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

 const Tweet = mongoose.model("Tweet", tweetSchema);


export default Tweet