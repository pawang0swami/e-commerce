const mongoose =require("mongoose")

const s=new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userid:String,
    company:String

})

module.exports=mongoose.model("products",s)

