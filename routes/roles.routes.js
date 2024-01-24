const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello from roles section"});
})

router.post("/:id",(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
})

module.exports=router;