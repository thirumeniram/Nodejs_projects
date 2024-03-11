const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    //iamgeUrl,title,description,price,rating
    imageUrl:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        reuired:true
    },
})

const product=mongoose.model('product',productSchema);

module.exports=product;
//require teh mongoose
///create the schema
//create the model
//export the model