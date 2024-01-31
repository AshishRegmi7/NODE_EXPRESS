const router=require("express").Router();


router.post("/",(req,res,next)=>{
    try{
        const data=req.body;
        console.log({data});
        res.json({msg:"Hello from user router"});

    }catch(e)
    {next(e)}
})

module.exports=router;