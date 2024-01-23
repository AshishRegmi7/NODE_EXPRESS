const express=require("express");
indexRouter=require("./routes");
const app=express();

app.use(express.json());

app.use("/",indexRouter);
app.listen(8000,()=>{
  console.log("Application is running")
})
