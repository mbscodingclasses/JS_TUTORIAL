// document.addEventListener('mousemove',
// function(e){

// let x = e.pageX ; //X axis => x coord

// console.log("pageX : " + x ); 

// let y = e.pageY ; //Y axis => y coord 

// console.log("pageY : " + y);

// });

// document.addEventListener('mousemove',
//   function(e){
  
//   console.clear();

//   let x = e.pageX ; //X axis => x coord
  
//   console.log("pageX : " + x ); 
  
//   let y = e.pageY ; //Y axis => y coord 
  
//   console.log("pageY : " + y);
  
//   });

// document.addEventListener('mousemove',function(e){
//   console.clear();

//   let x = e.pageX ; //x coordinate / x axis 

//   let y = e.pageY ; //y coordinate / y axis

//   let x2 = e.clientX ; //x coorinate / x axis value 

//   let y2 = e.clientY ; //y coordinate / y axis value 

//   console.log("pageX : " + x);
//   console.log("pageY : " + y);
//   console.log("clientX : " + x2);
//   console.log("clientY : " + y2);
// });


document.addEventListener('click',function(e){
  console.clear();

  let x = e.pageX ; //x coordinate / x axis 

  let y = e.pageY ; //y coordinate / y axis

  let x2 = e.clientX ; //x coorinate / x axis value / viewport

  let y2 = e.clientY ; //y coordinate / y axis value / viewport

  console.log("pageX : " + x);
  console.log("pageY : " + y);
  console.log("clientX : " + x2);
  console.log("clientY : " + y2);
});

// Note : 

// Agar main => vertically => scroll nahi => pageY and clientY => same 

// Agar main => horizontally => scroll nahi => pageX and clientX => same 

// clientX and clientY => return => viewport ki value 

// pageX and pageY => viewport ke alava bhi value return kar sakte hain 