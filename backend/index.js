const express = require("express");
require("./db/config")
const User=require("./db/user")
const cors = require("cors")


const app=express()

app.use(cors())
app.use(express.json());
app.post("/register",async(req,resp)=>{
     let user2=new User(req.body);
     let result= await user2.save()
     result=result.toObject()
     delete result.password
     resp.send(result)
     

})

app.post("/login",async(req,resp)=>{

   if(req.body.email && req.body.password){
   let user=await User.findOne(req.body).select("-password")
   if(user){
    resp.send(user)
   }else{
    resp.send ("not user found")
   }}
   else{
    resp.send ("enter email and password")
   }
})
    //          help to mach the password and email    select = - not show [passwod]

app.listen(5010,()=>{
  console.log("dfg")
})

