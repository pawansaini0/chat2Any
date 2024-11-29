const express = require("express");
const chats = require("./data");
const env=require("dotenv")
// const cors = require('cors');


const app = express();
env.config()
// app.use(cors());

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})


app.get("/api/chat/:id",(req,res)=>{
    const id=req.params.id
    const user=chats.filter((el)=>el._id==id)
    res.send(user)
})

const PORT=process.env.PORT ||4000

app.listen(PORT, () => console.log(`listening at ${PORT}`));
