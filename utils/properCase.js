const toProper=require("proper-upper-case");

const properCase=(string)=>{
   return toProper(string);
}

module.exports={properCase};