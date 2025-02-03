const express = require("express");
const mongoose =require("mongoose")
const app=express()
const DB=async()=>{
  mongoose.connect("mongodb://localhost:27017/e-comm");
  const pro=new mongoose.Schema({})
  const pr=mongoose.model('data',pro)
  const data=await pr.find()
  // console.log(data)
}
DB()

app.get("/",(req,R)=>{
  R.send(dat)
})


app.listen(5007)

  