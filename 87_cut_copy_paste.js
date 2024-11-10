// let target = document.querySelector("#myinput"); //input tag 

// target.addEventListener('copy',function(){
//   console.clear();
//   console.log("You Copied Text");
// });

// target.addEventListener('cut',function(){
//   console.clear();
//   console.log("You Cut Text");
// });
// target.addEventListener('paste',function(){
//   console.clear();
//   console.log("You Pasted Text");
// });

let target = document.querySelector("#myinput"); //input tag 

let box = document.querySelector('#box');//div

target.addEventListener('copy',function(){
  console.clear();
  console.log("You Copied Text");
  target.style.backgroundColor="lightgreen";
});
target.addEventListener('cut',function(){
  console.clear();
  console.log("You Cut Text");
  target.style.backgroundColor="pink";
});
target.addEventListener('paste',function(){
  console.clear();
  console.log("You Pasted Text");
  target.style.backgroundColor="lightblue";
});

// box.addEventListener('copy',function(){
//   box.style.backgroundColor="lightgreen";
// });

function copyfunction(){
  box.style.backgroundColor = "lightgreen";
}


// Note : 

// copy => input / p / div => text => use 

// paste & cut => sirf use => form input 

// brouser => copy => p / div 

// paste / cut => input 