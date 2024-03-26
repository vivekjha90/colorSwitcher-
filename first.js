let div1=document.querySelector("#st");
let div2=document.querySelector("#nd");
let div3=document.querySelector("#rd");
let div4=document.querySelector("#th");
 
let currMode="light";
div1.addEventListener("click",() =>{
 
  if(currMode==="light"){
    currMode="blue";
    document.querySelector("body").style.backgroundColor="blue";
    document.querySelector("h1").innerText="It's blue!";
  }
  else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h1").innerText="Color - Switcher";
  }
})
 
div2.addEventListener("click",()=>{
 
  if(currMode==="light" || currMode==="blue"||currMode==="yellow"|| currMode==="orchid"){
    currMode="green";
    document.querySelector("body").style.backgroundColor="mediumseagreen";
    document.querySelector("h1").innerText="It's mediumSeaGreen!";
  }
  else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h1").innerText="Color - Switcher";
  }
})
 
div3.addEventListener("click",()=>{
 
  if(currMode==="light" || currMode==="blue"||currMode==="green"|| currMode==="orchid"){
    currMode="yellow";
    document.querySelector("body").style.backgroundColor="yellow";
    document.querySelector("h1").innerText="It's Yellow!";
  }
  else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h1").innerText="Color - Switcher";
  }
})
 
div4.addEventListener("click",()=>{
 
  if(currMode==="light" || currMode==="blue"||currMode==="yellow"|| currMode==="green"){
    currMode="orchid";
    document.querySelector("body").style.backgroundColor="orchid";
    document.querySelector("h1").innerText="It's Orchid!";
  }
  else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h1").innerText="Color - Switcher";
  }
})
