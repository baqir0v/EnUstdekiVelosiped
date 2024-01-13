import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,default:""},
    price:{type:Number,required:true},
    categories:{type:String},
    discount:{type:Number},
    sale:{type:String}
})

export default mongoose.model("products",productModel)