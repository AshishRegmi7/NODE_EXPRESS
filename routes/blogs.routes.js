const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello From blogs section"});

})
module.exports=router;