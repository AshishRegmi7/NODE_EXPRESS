const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello from roles section"});
})

module.exports=router;