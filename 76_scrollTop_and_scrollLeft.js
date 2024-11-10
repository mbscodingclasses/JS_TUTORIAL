// document.querySelector("#box").addEventListener('scroll',()=>{

// }) ;

let target = document.querySelector("#box"); // div
 
target.addEventListener("scroll",() =>{
  // user scroll turant console clear
console.clear();
console.log("ScrollTop : " + target.scrollTop );// user ne top se kitna scroll 
console.log("scrollLeft: " + target.scrollLeft);
}
);




//div => event 