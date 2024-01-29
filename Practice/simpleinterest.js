 const time=(t=10)=>t;

 const simpleInterest=(p,r)=>{
return (p*time()*r)/100;
 }
const interest=simpleInterest(1000,10);

console.log(interest);