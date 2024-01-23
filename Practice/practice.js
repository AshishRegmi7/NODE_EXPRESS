//Write a Js function to compare and find the common item in 2 arrays using callback function

const arrA=["pasta","pizza","icecream"]
const arrB=["pasta","cake","icecream"]


const display=(solution)=>{
    return solution
  
}
const compare=(arrA,arrB,result)=>{
    const answer=arrA.filter((value)=>{
        if(arrB.includes(value)){
            return (value);
        }
    });
       return result(answer);
    
}
const response=compare(arrA,arrB,display);
console.log({response});