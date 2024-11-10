// document.addEventListener('mousemove',function(e){
//   console.clear();
//   let x = e.screenX ; //x coord => mon => x axis 
//  let y =  e.screenY ; //y coord => mon => y axis 
// console.log("screenX : " + x ) ; 
// console.log("screenY : " + y ) ; 
// //  cX & cY => x / y => viewport 
// });

// document.querySelector("#box").addEventListener('mousemove',function(e){
//   console.clear();
//   let x = e.screenX ;  // x coord => mon 
//   let y = e.screenY ; // y coord => mon
//   console.log("screenX : " + x);
//   console.log("screenY : " + y);
// }); //div => obj 


// document.querySelector("#box").addEventListener('click',function(e){
//   console.clear();
//   let x = e.screenX ;  // x coord => mon 
//   let y = e.screenY ; // y coord => mon
//   console.log("screenX : " + x);
//   console.log("screenY : " + y);
// }); //div => obj 


document.querySelector("#box").addEventListener('click',function(e){//div
  console.clear();
  let x = e.screenX ;  // x coord => monitor
  let y = e.screenY ; // y coord => monitor
  let x2 = e.clientX ;  // x coord => vieport
  let y2 = e.clientY ; // y coord => viewport
  console.log("screenX : " + x);
  console.log("screenY : " + y);
  console.log("clientX : " + x2);
  console.log("clientY : " + y2);
}); //div => obj 