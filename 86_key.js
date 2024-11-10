// document.querySelector("#myinput").addEventListener('keydown',function(e){
// console.clear();
// let text = "You pressed Button : " + e.key;
// console.log(text);
// });// input

// document.querySelector("body").addEventListener('keydown',function(e){
//   console.clear();
//   let text = "You pressed Button : " + e.key;
//   console.log(text);
//   });// input

// user page => open => var => 0

// let left = 0;
// let up = 0;

// document.querySelector("body").addEventListener('keydown',function(e){
//   console.clear();
//   // let text = "You pressed Button : " + e.key;
// switch(e.key){//ArrowRight , ArrowLeft ,ArrowDown , ArrowUp
// case "ArrowRight" :
//   left = left + 5 ; // 0 + 5 => 5
//   break ; 
//   case "ArrowLeft" :
//   left = left - 5 ; // 0 - 5 => -5
//   break ;
//   case "ArrowDown" :
//   up = up + 5 ; // 0 + 5 => 5 
//   break ;
//   case "ArrowUp" :
//   up = up - 5 ; // 0 - 5 => -5 
//   break ;
//   default:
//   console.log("Other key press .");
//   // break ;
// }
// // console.log(text);
// console.log("Left : " + left);
// console.log("Up : " + up);
//   });


let left = 0;
let up = 0;

document.querySelector("body").addEventListener('keydown',function(e){
  console.clear();
  // let text = "You pressed Button : " + e.key;
switch(e.key){//ArrowRight , ArrowLeft ,ArrowDown , ArrowUp
case "ArrowRight" :
  left = left + 5 ; // 0 + 5 => 5
  break ; 
  case "ArrowLeft" :
  left = left - 5 ; // 0 - 5 => -5
  break ;
  case "ArrowDown" :
  up = up + 5 ; // 0 + 5 => 5 
  break ;
  case "ArrowUp" :
  up = up - 5 ; // 0 - 5 => -5 
  break ;
  default:
  console.log("Other key press .");
  // break ;
}
// console.log(text);
console.log("Left : " + left);
console.log("Up : " + up);

let target = document.querySelector("#box");//div

target.style.marginLeft = left + "px" ;

target.style.marginTop = up + "px" ; 
  });