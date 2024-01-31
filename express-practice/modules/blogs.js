const router = require("express").Router();
const bcrypt = require("bcryptjs");

const checkRoles = (sysRoles) => {
    return (req, res, next) => {
        const userRoles = [req.body.role || req.headers.role];
        if (!userRoles || userRoles.length === 0) {
            return new Error("Roles are missing");
        }
        const result = userRoles.some((role) => sysRoles.includes(role));
        if (!result) {
            return new Error("Permission denied");
        }
        next();
    };
};

const toHash = (req, res, next) => {
        if(req.body.password)
       req.body.password=bcrypt.hashSync(req.body.password,10)
        next();
    };

router.get("/user", checkRoles(["useradmin"]), toHash, (req, res, next) => {
    try {
        res.json({msg:`${req.body.password}`});
        
        // res.json({ msg: req.body.passwordHash });
    } catch (e) {
        next(e);
    }
});


router.post("/:string",(req,res,next)=>{
    try{
   const result=req.params.string || req.query.string|| req.params.body;
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