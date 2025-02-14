const express = require("express");
require("./db/config");
const User = require("./db/user");
const cors = require("cors");

const Product = require("./db/Product");

const Jwt = require("jsonwebtoken");

const jwtkey = "e-comm";
//key (any name ){no body can know}[any name]


const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, resp) => {
  let user2 = new User(req.body);
  let result = await user2.save();
  result = result.toObject();
  
  delete result.password;

  Jwt.sign({ result }, jwtkey, { expiresIn: "100h" }, (err, token) => {
    if (err) {
      resp.send({ result: "error" });
    }
    resp.send({ result, token: token });
  });
  //  token
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtkey, { expiresIn: "100h" }, (err, token) => {
        if (err) {
          resp.send({ result: "error" });
        }
        resp.send({ user, token: token });
      });
      //                  token
    } else {
      resp.send("not user found");
    }
  } else {
    resp.send("enter email and password");
  }
});
//          help to mach the password and email    select = - not show [passwod]

app.post("/addproduct",verifytoken, async (req, resp) => {
  let pro = new Product(req.body);
  let result = await pro.save();
  resp.send(result);
});
//make the api add product

app.get("/products",verifytoken, async (req, resq) => {
  let products = await Product.find();
  if (products.length > 0) {
    resq.send(products);
  } else {
    resq.send("no product found");
  }
});
// api for get product

app.delete("/product/:id",verifytoken, async (req, res) => {
  const r = await Product.deleteOne({ _id: req.params.id });
  res.send(r);
});

app.get("/product/:id",verifytoken, async (req, res) => {
  let r = await Product.findOne({ _id: req.params.id });
  res.send(r);
});

app.put("/product/:id",verifytoken, async (req, res) => {
  // const 
  let r = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(r);
});

app.get("/search/:key",verifytoken, async (req, res) => {
  let r = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  res.send(r);
});


function verifytoken(req, resp, next){
  let token=req.headers["authorization"]
// const {authorization}=req.headers
  //key  . value
              
  if(token){


      token=token.split('bearer ')[1] 
      //  console.log(token)
           //                 split value [array]

  Jwt.verify(token,jwtkey,(err,data)=>{
    if(err){
    resp.status(401).send("wrong token")
       
    }else{
   next()
    }
  })
  }else{
    resp.send("no token ,in { hearder}")
  }

}
//    middeleware       


app.listen(5010, () => {
  console.log("df");
});
