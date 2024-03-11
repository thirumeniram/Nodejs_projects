const express=require("express")
const app=express();
const db=require("./config/database")

const port=8010;

app.listen(port,()=>{
    console.log("server is up and running",port)
})