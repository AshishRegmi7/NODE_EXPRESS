const router=require("express").Router();
const bookRouter=require("./book.route");
const userRouter=require("./user.route")
 //Route 1
 router.get("/", (req, res) => {
    res.json({ msg: "Hello World" });
  });
  
  //Route 2
//   router.get("/:fname/:lname", (req, res) => {
//     const data=req.params.fname;
//     const data2=req.params.lname;
  
//     res.json({ msg: `Hello ${data} ${data2}` });
//   });

router.use("/books",bookRouter);

router.use("/users",userRouter);

  
  //Route 3
  
//   router.get("/:data1/:data2",(req,res)=>{
//     const {data1,data2}=req.params;
//     const result=Number(data1)+Number(data2);
//     res.json({msg:`The sum is ${result}`});
//   })
  

  module.exports=router;
  
  //get => server to frontend
  //post => frontend to server
  //put => frontend to server; fix majority property of data
  //patch => frontend to server fix single property of data
  
  