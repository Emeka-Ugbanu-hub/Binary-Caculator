const btn1 = document.querySelector("#btn1");
const btn0 = document.querySelector("#btn0");
const res = document.querySelector("#res");
const clr = document.querySelector("#btnClr");
const sum = document.querySelector("#btnSum");
const sub = document.querySelector("#btnSub");
const div = document.querySelector("#btnDiv");
const mul = document.querySelector("#btnMul");
const equal = document.querySelector("#btnEql");
var display ;
btn1.addEventListener("click",function(){
  display = btn1.innerHTML;
  res.innerHTML += display;
})
btn0.addEventListener("click",function(){
  display = btn0.innerHTML;
  res.innerHTML += display;  
})
clr.addEventListener("click",function(){
  display = "";
  res.innerHTML = display;
})
sum.addEventListener("click",function(){
  display = "+";
  res.innerHTML += display;  
})
sub.addEventListener("click",function(){
  display = "-";
  res.innerHTML += display;  
})
div.addEventListener("click",function(){
  display = "/";
  res.innerHTML += display;  
})
mul.addEventListener("click",function(){
  display = "*";
  res.innerHTML += display;  
})
equal.addEventListener("click",function(){
  var final ;
  var find;
   const integer = Array.from(res.innerHTML);
if(integer.includes("+")){
    find = integer.indexOf("+");
    const last = integer.slice(find+1);
    const remove = integer.slice(0,find);
   const string = remove.join("");
     const touch = last.join("");
   const convert = parseInt(string,2);
   const change = parseInt(touch,2);
   final = convert + change ;
}
  else if(integer.includes("*")){
   find = integer.indexOf("*");
      const last = integer.slice(find+1);
    const remove = integer.slice(0,find);
   const string = remove.join("");
     const touch = last.join("");
   const convert = parseInt(string,2);
   const change = parseInt(touch,2);
   final = convert * change ;
}
   else if(integer.includes("/")){
  find = integer.indexOf("/");
        const last = integer.slice(find+1);
    const remove = integer.slice(0,find);
   const string = remove.join("");
     const touch = last.join("");
   const convert = parseInt(string,2);
   const change = parseInt(touch,2);
   final = convert / change ;
}
  else if(integer.includes("-")){
  find = integer.indexOf("-");
  const last = integer.slice(find+1);
    const remove = integer.slice(0,find);
   const string = remove.join("");
     const touch = last.join("");
   const convert = parseInt(string,2);
   const change = parseInt(touch,2);
  final = convert - change ;
}   
  const answer = final.toString(2)
  display = answer;   
res.innerHTML=display;
})
