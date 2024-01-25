const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hello from categories section"})
})

router.post("/:id",(req,res,next)=>{
   try{
    console.log({params:req.params})
    console.log({query:req.query})
    console.log({body:req.body})
   }
   catch(e){
    next(e);
   }
});




module.exports=router;