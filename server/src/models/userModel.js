import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username:{type:String,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:"user"}
},{timestamps:true})

export default mongoose.model("User",userModel)