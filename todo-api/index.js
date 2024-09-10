const express = require("express");
const todoRoutes=require("./todoRoutes");
const cors = require('cors');


const server = express();
server.use(cors());

server.listen(4100);

server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res)=>{
    res.send("Welcome to Utility api");
});
console.log("Server is listening at 4100");