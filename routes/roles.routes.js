const router=require("express").Router();
const {shortener}=require("../utils/descriptionGeneration");
router.get("/",(req,res)=>{
    res.json({msg:"Hello from roles section"});
})

// router.post("/:id",(req,res)=>{
//     console.log(req.body);
//     console.log(req.params);
//     console.log(req.query);
// })

router.post("/:string",(req,res,next)=>{
    try{const result=shortener(req.params.string || req.query.string || req.body.string);
    res.json({msg:result});}
    catch(e){
        next(e);
    }
})

module.exports=router;