// function focusFunction(){
//   document.getElementById("fname").style.background = "lime";
// }

// function focusFunction(element){
// element.style.background = "lime";
// }

// this => jiske ooper focus kar rahe hain => usiki value ki change kar do 

// 1 => focus => this => value => 1 => element => use 

// 2 => focus => this => value => 2 => element => use 


// note : focus function 

// us

// anchor tag , input box , select box

// focus => focus event 

// focus ko hatana => blur event 

// function focusFunction(element){
// element.style.background = "lime" ; 
// }

// function blurFunction(element){
// element.style.background = "";
// }


function focusFunction(element){
  element.style.background = "lime" ; 
  }
  
  function blurFunction(element){
  element.style.background = "";
  }

  function inputFunction(element){
let x = element.value;
document.getElementById("test").innerHTML = x ; 
  }

  function changeFunction(element){
let x = element.value;
document.getElementById("test").innerHTML = x ; 
  }

  function selectFunction(){
    console.log("You Selected Some Text");
  }

  function submitFunction(){
    let x = document.getElementById("fname").value ; 
    alert("Value is : " + x);
  }

  // function submitFunction(){
  //   alert("You submitted a form");
  // }
  // onchange => trigger => aapne kuch likha => change => onchange event 

  // Note : onchange => onspot => trigger => nahi hota 

  // oninput => onspot trigger => ho jata 

  // input tag 
  // select box 
  // textarea 

  // oninput => instant trigger 

  // Note : onchange => jaise hi iske ooper se loss hoga focus => trigger 