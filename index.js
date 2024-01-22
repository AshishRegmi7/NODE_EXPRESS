const express = require("express");

const app = express();

//Printing Hello World using express 
 //Route 1
app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

//Route 2
// app.get("/:fname/:lname", (req, res) => {
//   const data=req.params.fname;
//   const data2=req.params.lname;

//   res.json({ msg: `Hello ${data} ${data2}` });
// });

//Route 3

app.get("/:data1/:data2",(req,res)=>{
  const {data1,data2}=req.params;
  const result=Number(data1)+Number(data2);
  res.json({msg:`The sum is ${result}`});
})
app.listen(8000, () => {
  console.log("application is running");
});

//get => server to frontend
//post => frontend to server
//put => frontend to server; fix majority property of data
//patch => frontend to server fix single property of data

//1-16 random number generation using callback function