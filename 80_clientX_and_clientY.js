// user mouse move => coordinates 

// document.addEventListener('mousemove',function(e){
//   console.clear();
//   let x = e.clientX ; //X axis
//   let y = e.clientY ; //Y axis
//   console.log("Client X : " + x);
//   console.log("Client Y : " + y);
// });

// let target = document.querySelector('#box'); // div 

// target.addEventListener('mousemove',function(e){
//   console.clear();

//   let x = e.clientX ; //X axis / coord

//   let y = e.clientY ; //Y axis / coord

//   console.log("ClientX : " + x);

//   console.log("ClientY : " + y);
// });


// let target = document.querySelector('#box'); // div 

// target.addEventListener('click',function(e){
//   console.clear();

//   let x = e.clientX ; //X axis / coord

//   let y = e.clientY ; //Y axis / coord

//   console.log("ClientX : " + x);

//   console.log("ClientY : " + y);
// });


let target = document.querySelector('#box'); // div 

target.addEventListener('click',function(e){
  console.clear();

  let x = e.x ; //X axis / coord

  let y = e.y ; //Y axis / coord

  console.log("ClientX : " + x);

  console.log("ClientY : " + y);
});