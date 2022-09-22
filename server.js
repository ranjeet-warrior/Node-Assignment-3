// we are creating server using express framework

const express = require("express");
const server = express();

const middleware1 = (req,res,next) =>{
    console.log("Hello this is middleware1")
    next()
}

const middleware2 = (req,res,next)=>{
    console.log("Hello this is middleware2")
}

//server.use(middleware1);
//server.use(middleware2);

server.get("/",middleware1,(req,res) =>{
    res.send("Hello World")
    //res.send({name:"Ranjeet", id:24})
    //res.send("<h2>Hello</h2>")
})
server.get("/user", middleware2 , (req,res) =>{
res.send("Hello User!")
})
server.listen(30001, ()=>{
console.log("Server is running at port 3001")
})