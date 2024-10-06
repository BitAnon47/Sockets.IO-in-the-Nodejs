const express =require("express");
const app = express();
const http =require("http");
const path =require("path");
const { Server } = require("socket.io");

const server =http.createServer(app);
const io = new Server(server); //creating for the use of the sockets with the server

//Scokets.io handling here 
// here socket keyword is for the second user which is on the other end of the server 
io.on("connection", (socket) => {
    socket.on('user-message',(message)=>{
       io.emit("message",message);
    })
  });




app.use(express.static(path.resolve("./public")));
 
app.get("/",(req,res)=>{ 
    return res.sendFile("./public/index.html");
})


server.listen(3000,()=>console.log("server starting at the port 3000"));