const express=require("express");
const indexRouter=require("./routes")
const app=express();

app.use(express.json());
// app.get("/",(req,res)=>{
//    res.json({ msg:"hello from index"});

// })
app.use((err,req,res,next)=>{
    err=err? err.toString() :"Something went wrong";
    res.status(500).json({msg: err});
  })
  
app.use("/",indexRouter);
app.listen(5000,()=>{
console.log("app is running");
})