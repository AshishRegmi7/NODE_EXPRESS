const express=require("express");
const mongoose=require("mongoose");
const indexRouter=require("./routes")
const app=express();

mongoose.connect("mongodb://localhost:27017/ashishApp").then(()=>{
  console.log("Database is connected");
})

app.use(express.json());
// app.get("/",(req,res)=>{
//    res.json({ msg:"hello from index"});

// })
app.use("/",indexRouter);
app.use((err,req,res,next)=>{
    err=err? err.toString() :"Something went wrong";
    res.status(500).json({msg: err});
    next();
  })
  
app.listen(5000,()=>{
console.log("app is running");
})