const router=require("express").Router();
const {encrypt,compare}=require("../utils/passwordConverter")

router.get("/",(req,res)=>{
    res.json("Hello from user");
})

// router.post("/:id",(req,res)=>{
//     console.log({params:req.params})
//     console.log({query:req.query})
//     console.log({body:req.query})
// })

router.post("/:string",(req,res,next)=>{
try{
    const result=encrypt(req.params.string || req.query.string || req.body.string);
    res.json({encryptedPassword:result});

} catch(e){
    next(e);
}
})

module.exports=router;