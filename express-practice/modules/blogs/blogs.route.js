const router = require("express").Router();
const bcrypt = require("bcryptjs");
const blogController=require("./blogs.controller");
// 
router.delete("/:id",async(req,res,next)=>{
    try{
        const id=req.params;
        const result=await blogController.deleteById(id);
        res.json({msg:result});
    }catch(e){
        next(e);}
})


router.post("/",async(req,res,next)=>{
    try{
   const data=req.body;
data.time=Math.floor(data.words/150);
console.log({data});
const result=await blogController.create(data);
   res.json({msg:result});
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