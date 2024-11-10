// let target = document.querySelector("#box") ; // div 
// target.addEventListener("mousedown" , function(e){
//   console.clear();
//   let text = "You pressed Button : " + e.button ; // l = 0 , m = 1 , r = 2 
//   console.log(text);
// });

// right but = 0 
// mid but = 1 
// left but = 2 

// let target = document.querySelector("#box");// div 

// target.addEventListener('mousedown',function(e){
// console.clear();
// let text = e.button ;//0 Left , 1 Middle , 2 Right
// let color ; 
// switch(text){//0 1 2 => left middle right 
// case 0 : // 0 == 0 => t 
// color = "green";
// break ; 
// case 1 : // 1 == 1 => t 
// color = "blue";
// break ; 
// case 2 : // 2 == 2 => t 
// color = "red";
// break ; 
// default : 
// color = "pink" ; 
// }
// console.log(color);
// });


let target = document.querySelector("#box");// div 

target.addEventListener('mousedown',function(e){
console.clear();
let text = e.button ;//0 Left , 1 Middle , 2 Right
let color ; 
switch(text){//0 1 2 => left middle right 
case 0 : // 0 == 0 => t 
color = "green";
break ; 
case 1 : // 1 == 1 => t 
color = "blue";
break ; 
case 2 : // 2 == 2 => t 
color = "red";
break ; 
default : 
color = "pink" ; 
}
// console.log(color);
target.style.backgroundColor = color ; // div style => color g b r => 0 1 2 => l m r
});