const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello from categories section"})
})

router.post("/:id",(req,res)=>{
    console.log({params:req.params})
    console.log({query:req.query})
    console.log({body:req.body})
})

module.exports=router;