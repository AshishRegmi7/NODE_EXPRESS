//1-16 random number generation using callback function

const display=(result)=>{
    document.getElementById("result").innerHTML=`Result:${result}`; 
}
const random=(callbackfn)=>{
    const result=Math.floor((Math.random()*10) +1);
        callbackfn(result);
}

const randomNumberDisplay=()=>{
random(display);
}
