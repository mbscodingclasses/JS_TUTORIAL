// let target = document.querySelector("#box") ; //div

// target.addEventListener('click',function(e){
//   let ctrl = e.ctrlKey ; // t / f 
//   console.log(ctrl); 
// });

// let target = document.querySelector("#box");//div

// target.addEventListener('click',function(e){

//   let ctrl = e.ctrlKey ; //t / f 
//   if(ctrl){//ctrl = true 
// console.log("You Pressed Ctrl Key");
//   }
//   else{//ctrl = false 
// console.log("You not pressed ctrl key");
//   }
// });


// let target = document.querySelector("#box");//div

// target.addEventListener('click',function(e){
//  console.clear();

//   let ctrl = e.ctrlKey ; //t / f 
//   if(ctrl){//ctrl = true 
// console.log("You Pressed Ctrl Key");
//   }
//   else{//ctrl = false 
// console.log("You not pressed ctrl key");
//   }
// });



// let target = document.querySelector("#box");//div
// target.addEventListener('click',function(e){
//  console.clear();

//  let shift = e.shiftKey ; // t / f 
//  if(shift){// shift = true 
// console.log("You pressed Shift Key");
//  }
//  else{ // shift = false 
// console.log("You not pressed Shift Key");
//  }
// });


// let target = document.querySelector("#box");//div
// target.addEventListener('click',function(e){
//  console.clear();

//  let alt = e.altKey ; // t / f
//  if(alt){// alt = true 
// console.log("You Pressed Alt Key !");
//  }
//  else{//alt = false 
// console.log("You Not Pressed Alt Key !");
//  }
// });

// command key mack , window key 

// let target = document.querySelector("#box");//div
// target.addEventListener('click',function(e){
//  console.clear();

//  let meta = e.metaKey ;  // t => w / c / f 

//  if(meta){ // meta = true
// console.log("You pressed Meta Key");
//  }
//  else{//meta = false 
// console.log("You not Pressed Meta Key ");
//  }
// });


// let target = document.querySelector("#box");//div
// target.addEventListener('click',function(e){
//  console.clear();
// let key ; 
// switch(true){
//   case e.metaKey : // window key => t / f 
//   key = "Meta Key";//t
//   break ; 
//   case e.altKey : // alt key => t / f 
//   key = "Alt Key";//t
//   break ; // t , switch se baahar 
//   case e.ctrlKey : // Ctrl key => t / f 
//   key = "Ctrl Key";//t
//   break ; 
//   case e.shiftKey : // shift key => t / f 
//   key = "Shift Key";//t
//   break ; 
//   default:
//     key = "No key Pressed";
// }
// console.log("You Pressed : " + key);
// });


let target = document.querySelector("#mytextbox");//input 
target.addEventListener('keydown',function(e){
 console.clear();
let key ; 
switch(true){
  case e.metaKey : // window key => t / f 
  key = "Meta Key";//t
  break ; 
  case e.altKey : // alt key => t / f 
  key = "Alt Key";//t
  break ; // t , switch se baahar 
  case e.ctrlKey : // Ctrl key => t / f 
  key = "Ctrl Key";//t
  break ; 
  case e.shiftKey : // shift key => t / f 
  key = "Shift Key";//t
  break ; 
  default:
    key = "Any Other key Pressed";
}
console.log("You Pressed : " + key);
});

// ctrlKey , altKey , metaKey  , shiftKey => prop => mouse events use / keyboard events => keypress , keydown