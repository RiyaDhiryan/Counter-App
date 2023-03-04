const dec=document.getElementById("Decrement");
const inc=document.getElementById("Increment");
const res=document.getElementById("Reset");
const dis=document.getElementById("display");
// Decrement button
const decre = () =>{
   let val = Number(display.innerText);
   if(val>0){
    display.innerText = val-1;
   }
   else{
    alert("Negative Value not allowed");
   }
};
dec.addEventListener("click",decre);
// Increment Button
const incre = () =>{
    let val = Number(display.innerText);
    if(val>=10){
        alert("Above 10 value is not allowed");
    }
    else{
        display.innerText = val+1;  
    }
   
 };
 inc.addEventListener("click",incre);
  const resetBtn = () =>{
    display.innerText=0;
  };
  res.addEventListener("click",resetBtn);
