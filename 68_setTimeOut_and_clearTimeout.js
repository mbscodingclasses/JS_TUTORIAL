// let id = setTimeout(AnimationReal,3000);//3000ms = 3s => call => fun

// function AnimationReal(){
// console.log("Hello");//3s => Hello => console
// }

// let id = setTimeout(AnimationReal,3000);

// function AnimationReal(){

//   let target = document.getElementById("test");//div 

//   target.style.width = "500px" ; 
// }

// let id = setTimeout(AnimationReal,5000);//5000ms = 5 sec 

// function AnimationReal(){

//   let target = document.getElementById("test");//div 

//   target.style.width = "500px";

// }

// function stopAnimation(){
//   clearTimeout(id);
// }

let id = setTimeout(function(){
  let target = document.getElementById("test");//div

target.style.width = "500px"
},5000);//5000ms = 5 sec
function stopAnimation(){
  clearTimeout(id);
}