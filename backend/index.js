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
     resp.send(result)
     

})


app.listen(5010,()=>{
  console.log("dfg")
})

