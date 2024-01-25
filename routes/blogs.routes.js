const router=require("express").Router();
const {properCase}=require("../utils/properCase");
router.get("/",(req,res)=>{
    res.json({msg:"Hello From blogs section"});

})

router.post("/:string",(req,res)=>{
const result=properCase(req.params.string|| req.query.string||req.body.string);
res.json({msg: result})

})

// router.post("/:id",(req,res)=>{
//      console.log({params:req.params})
//      console.log({query:req.query})
//      console.log({body:req.body})
// })

module.exports=router;