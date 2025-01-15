const express = require("express");

const app=express()

app.get("/",(req,R)=>{
  R.send("ok200")
})


app.listen(5001, () => {
    console.log('Server listening on port 5001');
  });

  