const bcrypt=require("bcrypt");

const encrypt=(string)=>{
    return bcrypt.hashSync(string,10);
}

const compare=(string,hash)=>{
    return bcrypt.compareSync(string,hash);
}


module.exports={encrypt,compare};