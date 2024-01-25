const shortener=(string)=>{
    return string.slice(0,20).concat("....");
}

module.exports={shortener};