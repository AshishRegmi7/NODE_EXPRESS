const router=require("express").Router();
const {numConverter}=require("../utils/numConverter");
router.get("/",(req,res)=>{
    res.json("Hello From book section")
})
 router.put("/:id",(req,res,next)=>{
    try{
    const data=Object.keys(req.body).length;
       if(!data) throw new Error("Body missing");
       res.json({msg:"Update multiple properties of books"})
    }catch(e){
        next(e);
    }
    })
    router.post("/:number",(req,res,next)=>{
        try{ const result=numConverter(
            req.query.number || req.body.number || req.params.number
        );
    res.json({msg:result});
}
       catch(e){
        next(e);
    }
     });
 router.patch("/:id",(req,res,next)=>{
        try{
            const data=req.body;
           if(!data) throw new Error("Body missing");
           res.json({msg:`Update single properties of books`})
        }catch(e){
            next(e);
        }
        })
        router.delete("/:id",(req,res,next)=>{
            try{
               const {id}=req.params;
               if(!id) throw new Error("Idis missing");
               res.json({msg:`Delete the book`});
            }catch(e){
                next(e);
            }
            })


module.exports=router;

//req.params => /:id =>req.params.id //detail page
//req.query => ?key=value //pagination
//req.body => raw json ({key:value})