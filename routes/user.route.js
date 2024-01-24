const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json("Hello from user");
})

router.post("/:id",(req,res)=>{
    console.log({params:req.params})
    console.log({query:req.query})
    console.log({body:req.query})
})

module.exports=router;