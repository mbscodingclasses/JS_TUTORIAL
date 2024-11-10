// 1 . parent node & parent element 

// Note :inner div => outer div 

// let a = document.getElementById("inner").parentElement;

// console.log(a);

// let a = document.getElementById("outer").parentElement ;

// console.log(a);

// let a = document.body.parentElement;

// console.log(a);

// document.getElementById("inner").parentElement.style.background = "red";

// let a = document.getElementById("inner").parentElement;

// console.log(a);

// child-c 

// document.getElementById("child-c").parentElement.style.background = "green";

// let a = document.getElementById("child-c").parentElement ; 

// console.log(a);

// 2 . parent node 

// parent element & parent node => 

// Note : agar humare paas => parent element ke andar => 

  // parent element => koi bhi parent nahi => null

  // parent node => koi bhi parent => return => kuch naa kuch return

  // document.getElementById("child-c").parentElement.style.background = "red";

  // let a = document.getElementById("child-c").parentNode;

  // console.log(a);

  
  // document.getElementById("child-c").parentNode.style.background = "red";

  // let a = document.getElementById("child-c").parentNode;

  // console.log(a);

  // parent node => return => text node , element node => tags
  
  // document.getElementById("child-c").parentNode.style.background = "red";

  // let a = document.getElementById("main").parentNode;

  // console.log(a);

  
  // document.getElementById("child-c").parentNode.style.background = "red";

  // let a = document.getElementById("main").parentElement;//null

  // console.log(a);

  // children & childnodes 

  // parent ko leke => children ko target 

// note : children target => child elements / child tags 

// let a = document.getElementById("outer").children ;

// console.log(a);

// let a = document.getElementById("inner").children ; 

// console.log(a);

// let a = document.getElementById("inner").children[1] ; 

// console.log(a);

// document.getElementById("inner").children[1].style.background = "red";

// let a = document.getElementById("inner").children[1]; 

// console.log(a);


// document.getElementById("inner").children[0].style.background = "green";

// let a = document.getElementById("inner").children[0]; 

// console.log(a);


// document.getElementById("inner").children[0].style.background = "green";

// let a = document.getElementById("inner").children[0].innerHTML; 

// console.log(a);

// 2 . ChildNodes

// Note : children vs childNodes 

// children => html tags => return 

// childNodes => tags + text node => return 

// document.getElementById("inner").children[0].style.background = "red";

// let a = document.getElementById("inner").childNodes;

// console.log(a);


// Note : childNodes => count => enter , new line , space , comments 

// document.getElementById("inner").children[0].style.background = "green" ; 

// let a = document.getElementById("inner").childNodes[1].innerHTML; 

// console.log(a);


// document.getElementById("inner").children[0].style.background = "green" ; 

// let a = document.getElementById("inner").childNodes[0].innerHTML; 

// console.log(a);

// document.getElementById("inner").childNodes[1].style.background = "red"; 

// let a = document.getElementById("inner").childNodes[1].innerHTML ; 

// console.log(a);

// 1 . firstElementChild 

// let a = document.getElementById("inner").firstElementChild ; 

// console.log(a) ; 

// let a = document.getElementById("inner").firstElementChild.innerHTML ; 

// console.log(a) ; 

// document.getElementById("inner").firstElementChild.style.background = "yellow"  ;

// let a = document.getElementById("inner").firstElementChild.innerHTML ; 

// console.log(a);

// document.getElementById("outer").firstElementChild.style.background = "aqua" ; 

// let a = document.getElementById("outer").firstElementChild ; 

// console.log(a);

// lastElementChild 

// document.getElementById("outer").lastElementChild.style.background = "green" ; 

// let a = document.getElementById("outer").lastElementChild;

// console.log(a);

// document.getElementById("inner").lastElementChild.style.background = "aqua" ; 

// let a = document.getElementById("inner").lastElementChild ; 

// console.log(a);

// firstChild 

// let a = document.getElementById("inner").firstChild ; 

// console.log(a) ; 



// let a = document.getElementById("inner").childNodes ; 

// console.log(a) ; 


// let a = document.getElementById("inner").firstElementChild ; 

// console.log(a) ; 


// let a = document.getElementById("inner").firstChild ; 

// console.log(a) ; 

// firstChild => lastChild 

// let a = document.getElementById("inner").lastChild ; 

// console.log(a) ; 

// document.getElementById("inner").lastChild.style.background = "red" ; 

// let a = document.getElementById("inner").lastChild ; 

// console.log(a) ; 

// let a = document.getElementById("child-c").lastChild ; 

// console.log(a) ; 


// let a = document.getElementById("child-c").firstChild ; 

// console.log(a) ; 

// let a = document.getElementById("child-c").nextElementSibling ; 

// console.log(a);

// let a = document.getElementById("child-c").previousElementSibling ; 

// console.log(a);

// element => tag => next / prev 

// let a = document.getElementById("child-c").previousElementSibling.innerHTML ;

// console.log(a);


// document.getElementById("child-c").nextElementSibling.style.background = "green" ; 

// let a = document.getElementById("child-c").nextElementSibling.innerHTML ; 


// console.log(a);

// document.getElementById("child-E").nextElementSibling.style.background = "yellow" ; 

// let a = document.getElementById("child-E").nextElementSibling.innerHTML;

// console.log(a)

// previousElementSibling 

// let a = document.getElementById("child-head").previousElementSibling;

// console.log(a);

// dono => tags / elements => target 

// previousElemenetSibling 

// nextElementSibling 

// previousSibling 

// let a = document.getElementById("child-c").previousSibling;

// console.log(a);

// nextSibling

// let a = document.getElementById("child-c").nextSibling;

// console.log(a);