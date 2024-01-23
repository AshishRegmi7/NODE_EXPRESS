const router=require("express").Router();

router.get("/",(req,res)=>{
    res.json("Hello From book section")
})
 router.post("/",(req,res)=>{
        console.log(req.query);

    })


module.exports=router;

//req.params => /:id =>req.params.id //detail page
//req.query => ?key=value //pagination
//req.body => raw json ({key:value})