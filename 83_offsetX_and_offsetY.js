// let target = document.querySelector("#box");//div

// target.addEventListener('mousemove',function(e){
//   let x = e.offsetX ; //x coordinate => div

//   let y = e.offsetY ; //y coordinate => div

//   console.log("offsetX : " + x);

//   console.log("offsetY : " + y);
// });

// let target = document.querySelector("#box");//div

// target.addEventListener('mousemove',function(e){

//   console.clear();

//   let x = e.offsetX ; //x coordinate => div

//   let y = e.offsetY ; //y coordinate => div

//   console.log("offsetX : " + x);
  
//   console.log("offsetY : " + y);
// });


let target = document.querySelector("#box");//div

target.addEventListener('click',function(e){

  console.clear();

  let x = e.offsetX ; //x coordinate => div

  let y = e.offsetY ; //y coordinate => div

  console.log("offsetX : " + x);
  
  console.log("offsetY : " + y);
});