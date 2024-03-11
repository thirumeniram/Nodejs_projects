const mongoose=require("mongoose")

mongoose.connect(`mongodb+srv://thirumeniram25:gHuG9XnLQ9rPzvD8@cluster0.v4fv0q0.mongodb.net/`)

const db=mongoose.connection;

db.on("error",(error)=>{
    console.log("Error occurred",error)
})

db.once("open",()=>{
 console.log("successfully connected to the db")
})

module.exports=mongoose;

//mongoose connect
//get teh connection
//define the mongoose
//export


//gHuG9XnLQ9rPzvD8

//mongodb+srv://thirumeniram25:gHuG9XnLQ9rPzvD8@cluster0.v4fv0q0.mongodb.net/