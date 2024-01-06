import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,default:""},
    price:{type:Number,required:true},
    // categories:[{type:String,required:true}],
    categories:{type:String},
    discount:{type:Number,default:0},
})

export default mongoose.model("products",productModel)