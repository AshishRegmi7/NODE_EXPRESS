const router=require("express").Router();
const {numConverter}=require("../utils/library");
router.get("/",(req,res)=>{
    res.json("Hello From book section")
})
//  router.post("/:id",(req,res)=>{
//        console.log(req.params);
//         console.log(req.query);
//         console.log(req.body);
//     })
    router.post("/:number",(req,res)=>{
        const result=numConverter(
            req.query.number || req.body.number || req.params.number
        );
    res.json({msg:result});
     })


module.exports=router;

//req.params => /:id =>req.params.id //detail page
//req.query => ?key=value //pagination
//req.body => raw json ({key:value})