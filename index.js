const express=require("express");
indexRouter=require("./routes");
const app=express();

app.use(express.json());

app.use((req,res,next)=>{
  const date =new Date();
  req.body.date=date;
  next();
})

app.use("/",indexRouter);

app.use((err,req,res,next)=>{
  err=err? err.toString() :"Something went wrong";
  res.status(500).json({msg: err});
})
app.listen(8000,()=>{
  console.log("Application is running")
})
