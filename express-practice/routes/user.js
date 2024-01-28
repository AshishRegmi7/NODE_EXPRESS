const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello from user section"});
})

router.post("/:string",(req,res,next)=>{
    try{
   const result=req.params.string || req.query.string|| req.params.body;
   res.json=({msg:result});
    }
    catch(e){
        next(e);
    }
})
 router.put("/:id",(req,res,next)=>{
    try{
        const{id}=req.params;
    if(!id) throw new Error("ID missing");
    //Logic
    res.json({msg:"Hello from user"});
    }
    catch(e){
        next(e);
    }
 })

module.exports=router;