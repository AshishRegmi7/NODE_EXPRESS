const router=require("express").Router();
const blogRouter=require("../modules/blogs");
const userRouter=require("../modules/users");

router.use("/blogs",blogRouter);

router.use("/users",userRouter);

module.exports=router;