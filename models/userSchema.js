import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: "string", required: true },
    password: { type: "string", required: true },
    email: { type: "string", required: true,unique:true },
    username: { type: "string", required: true ,unique:true},
    followers: { type:Array, default:[] },
    following: { type:Array, default:[] },
    bookmarks: { type:Array, default:[] },
    registrationDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

 export const User = mongoose.model("User", userSchema);

