// let target = document.querySelector("#box") ; // div

// window.addEventListener('offline',function(){
//   target.innerHTML = "You are Offline";
//   target.style.backgroundColor = "pink";
// });
// window.addEventListener('online',function(){
//   target.innerHTML = "You are Online";
//   target.style.backgroundColor = "lightgreen";
// });

let target = document.querySelector("#box") ; // div

// window.addEventListener('offline',function(){
//   target.innerHTML = "You are Offline";
//   target.style.backgroundColor = "pink";
// });
function offlineFunction(){
    target.innerHTML = "You are Offline";
  target.style.backgroundColor = "pink";
}

window.addEventListener('online',function(){
  target.innerHTML = "You are Online";
  target.style.backgroundColor = "lightgreen";
});

// check 

// console.log(navigator.onLine) ;//t 

if(navigator.onLine){//t => online
console.log("Online");
}
else{
  console.log("Offline");
}