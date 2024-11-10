// Dom 

// let element;
// element = document;
// console.log(element);
// console.log(typeof document);

// 2 . document.all 

// let element;
// element = document.all;
// console.log(element);

// let element;
// element = document.all[9];
// console.log(element);

// 3 . document.head 
// let element;
// element = document.head;
// console.log(element);

// 4. document.title 
// let element;
// element = document.title;
// console.log(element);

// 5 . document.body 
// let element;
// element = document.body;
// console.log(element);

// 6 . document.links => anchor tag 
// let element;
// element=document.links;
// console.log(element);

// let element;
// element=document.links[0];
// console.log(element);

// 7 . document.images 
// let element;
// element = document.images;
// element = document.images[0];
// console.log(element);

// 8 . document.forms 
// let element;
// element = document.forms;
// element = document.forms[0];
// console.log(element);

// 9 . document.doctype 
// let element;
// element = document.doctype;
// console.log(element);

// 10 . document.url 
// let element;
// element = document.URL;
// console.log(element);

// 11 . document.domain 
// ex . abc.com => abc.com => domain name
// ex . mbscoding.com => domain name
// ex . mbseducational.org => domain name

// let element;
// element = document.domain;
// console.log(element);

// 12 . document.baseURI 
// let element;
// element = document.baseURI;//url 
// console.log(element);

// 1 . document.getElementById() => cs 

// let element;
// element = document.getElementById("header");
// console.log(element);

// 2 . document.getElementsByClasssName 
// Note : classes => multiple use 

// let element;
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list"[0]);
// console.log(element);

// 3 . getElementsByTagName 
// let element;
// element = document.getElementsByTagName("ul");
// console.log(element);

// class / tag => ek hi naam ka tag/class => multiple baar use kar paayenge 
// id => nahi => ek hi naam ka id => ek hi baar use 

// error : 
// Note : script => body just end => attach / link
// let element;
// element = document.body;
// console.log(element);

// get 
// innerText
// let element;
// element = document.getElementById("header").innerText;
// console.log(element);//

// let element;
// element = document.getElementById("content").innerText;
// console.log(element);

// innerHTML => get 

// let element;
// element = document.getElementById("content").innerHTML;
// console.log(element);

// let element;
// element = document.getElementById("header").innerHTML;
// console.log(element);

// getAttribute => get 

// let element;
// element = document.getElementById("header").getAttribute("class");//abc
// console.log(element);

// let element;
// element = document.getElementById("header").getAttribute("id");//header
// console.log(element);

// let element;
// element = document.getElementById("header").getAttribute("style");//style = 
// console.log(element);

// let element;
// element = document.getElementById("header").getAttribute("onClick");
// console.log(element);

// getAttributeNode 
// let element;
// element = document.getElementById("header").getAttributeNode("onClick");
// console.log(element);

// let element;
// element = document.getElementById("header").getAttributeNode("style");
// console.log(element);

// let element;
// element = document.getElementById("header").getAttributeNode("style").value;
// console.log(element);

// Attributes() 

// let element;
// element = document.getElementById("header").attributes;
// console.log(element);


// let element;
// element = document.getElementById("header").attributes[2];
// console.log(element);


// let element;
// element = document.getElementById("header").attributes[3];
// console.log(element);

// let element;
// element = document.getElementById("header").attributes[4];
// console.log(element);

// let element;
// element = document.getElementById("header").attributes[2].value;
// console.log(element);

// let element;
// element = document.getElementById("header").attributes[2].name;
// console.log(element);

// let element;
// element = document.getElementById("header").attributes[1].name;
// console.log(element);

// set 
// let element;
// // set 
// document.getElementById("header").innerText = "Mbs Educational";
// // get
// element = document.getElementById("header").innerHTML;
// console.log(element);


// note : text => text ko set / text ko change 
// let element;
// // set 
// document.getElementById("header").innerText = "<h1>Mbs Educational</h1>";
// // get
// element = document.getElementById("header").innerHTML;
// console.log(element);

// // innerHTML
// let element;

// element = document.getElementById("header").innerHTML;

// console.log(element);//mbs coding

// // set 

// document.getElementById("header").innerHTML = "<h1>Mbs Educational</h1>";

// // get
// element = document.getElementById("header").innerHTML;

// console.log(element);//mbs educational 

// set => attribute 

// let element;

// document.getElementById("header").innerHTML = "<h1>Mbs Educational</h1>";

// document.getElementById("header").setAttribute("class","xyz");

// element = document.getElementById("header").getAttribute("class");

// console.log(element);



// let element;

// document.getElementById("header").innerHTML = "<h1>Mbs Educational</h1>";

// document.getElementById("header").setAttribute("style","border:10px dotted yellow");

// element = document.getElementById("header").getAttribute("class");

// console.log(element);

// setAttributes => set / change 

// let element;

// document.getElementById("header").innerHTML = "<h1>Mbs Educational</h1>";

// document.getElementById("header").attributes[1].value = "xyz";//xyz => yellow

// element = document.getElementById("header").getAttribute("class");

// console.log(element);//xyz

// removeAttribute 

// let element;

// document.getElementById("header").innerHTML="<h1>Mbs Educational</h1>";

// document.getElementById("header").attributes[1].value = "xyz";

// document.getElementById("header").removeAttribute("style");

// element = document.getElementById("header").getAttribute("class");

// console.log(element);


// let element;

// document.getElementById("header").innerHTML="<h1>Mbs Educational</h1>";

// document.getElementById("header").attributes[1].value = "xyz";

// document.getElementById("header").removeAttribute("style");

// document.getElementById("header").removeAttribute("class");

// element = document.getElementById("header").getAttribute("class");

// console.log(element);

// element = document.getElementById("header").getAttribute("style");

// console.log(element);

// querySelector 

// let element;

// document.querySelector('#header').innerHTML = "<h1>Mbs Eductional</h1>";

// element = document.getElementById("header").getAttribute("class");

// console.log(element);



// let element;

// document.querySelector('#header').innerHTML = "<h1>Mbs Eductional</h1>";

// element = document.querySelector("#header").getAttribute("class");

// console.log(element);


// Note : query selector => sirf => pahle wale class
// ul , p => class = list  
// ul list => class => list 

// let element;

// set 
// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h1>";

// element = document.querySelector(".list");

// console.log(element);//ul list pahli baar use


// let element;

// document.querySelector('#header').innerHTML = "<h1>Mbs Eductional</h1>";

// element = document.getElementById("header").getAttribute("class");

// classname sirf 

// element = document.getElementsByClassName("list");

// console.log(element);


// querySelectorAll 

// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h1>";

// // id , tagname , classname 

// element = document.querySelectorAll(".list");

// console.log(element);


// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h1>";

// id , tagname , classname 

// element = document.querySelectorAll(".list")[1] ;

// element = document.querySelectorAll(".list")[0] ;

// element = document.querySelectorAll(".list")[1].innerHTML;

// element = document.querySelectorAll(".list")[0].innerHTML;

// console.log(element);

// TagName 

// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h2>";

// // ul tag => 3 use 

// element = document.querySelectorAll("ul");


// console.log(element);


// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h2>";

// // ul tag => 3 use 

// element = document.querySelectorAll("ul")[0].innerHTML ;

// console.log(element);


// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h2>";

// // ul tag => 3 use 

// element = document.querySelectorAll("ul")[1].innerHTML ;

// console.log(element);


// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h2>";

// // ul tag => 3 use 

// element = document.querySelectorAll("ul")[2].innerHTML ;

// console.log(element);

// querySelectorAll

// Id
// ClassName
// TagName

// Adv selector 

// let element;

// // document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h1>";

// element = document.querySelectorAll("#header h1");

// console.log(element);

// let element;

// // document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h1>";

// element = document.querySelectorAll("#header h1")[0].innerHTML ;

// console.log(element);

// let element;

// document.querySelector("#header").innerHTML = "<h1>Mbs Educational</h1>";

// element = document.querySelectorAll("#header h1")[1].innerHTML ;

// console.log(element);

// style 

// let element;

// element = document.querySelector("#header").style.border ;

// console.log(element);

// let element;

// element = document.querySelector("#header").style.color ;//blank

// console.log(element);

// let element;

// element = document.querySelector('#header').style.color;

// console.log(element);

// style method 

// let element;

// element = document.querySelector("#header").style.border ; 

// console.log(element);

// style => get / set 

// let element;

// element = document.querySelector('#header').style.border ; 

// console.log(element);

// color 

// let element;

// element = document.querySelector('#header').style.color ; 

// console.log(element);//blank

// let element;

// element = document.querySelector('#header').style.color ;

// console.log(element);

// set 

// let element; 

// set 

// document.querySelector("#header").style.backgroundColor = "aqua"; 

// // get 

// element = document.querySelector("#header").style.color ;

// console.log(element);

// let element; 

// document.querySelector("#header").style.backgroundColor = "aqua";

// document.querySelector("#header").style.color = "blue" ;

// element = document.querySelector("#header").style.color ; 

// console.log(element);

// className => dom => styling 

// let element;

// // set 

// document.querySelector("#header").className = "abc" ;

// // get 

// element = document.querySelector("#header").className ; 

// console.log(element);


// let element;

// // set 

// document.querySelector("#header").className = "abc xyz" ;

// // get 

// element = document.querySelector("#header").className ; 

// console.log(element);

// classList 

// Note : classList vs className

// let element; 

// set 

// document.querySelector('#header').classList = "abc xyz";

// element = document.querySelector('#header').className ;

// console.log(element);


// document.querySelector('#header').classList = "abc xyz";

// element = document.querySelector('#header').classList ;

// console.log(element);

// // Note : classlist => array type 

// // Note : className => string

// add()

// let element;

// set/add => xyz class

// document.querySelector("#header").classList.add("xyz");

// // get 

// element = document.querySelector("#header").classList ;

// console.log(element);

// classList => remove 

// let element;

// document.querySelector("#header").classList.remove("xyz","efg");

// element = document.querySelector('#header').classList ;

// console.log(element);

// addEventListener 

// let element; 

// document.getElementById("header").onclick = abc ; 

// function abc(){
// document.getElementById("header").style.background="green";
// }



// let element; 

// document.getElementById("header").onmouseenter = abc ; 

// function abc(){
// document.getElementById("header").style.background="green";
// }

// addEventListner 1 

// let element;

// document.getElementById("header").addEventListener("click",abc);

// function abc(){
//   document.getElementById("header").style.background = "green";
// }

// multiple events 

// header naam ka ek object => 2 event laga de => mouseenter  , click => addEventListener

// let element;

// document.getElementById("header").addEventListener("mouseenter",abc);

// document.getElementById("header").addEventListener("click",function(){
//   document.getElementById("header").style.border = "10px solid black";
// });

// function abc(){
//   document.getElementById("header").style.background="green";
// }



// let element;

// document.getElementById("header").addEventListener("click",abc);

// document.getElementById("header").addEventListener("click",function(){
//   document.getElementById("header").style.border = "10px solid black";
// });

// function abc(){
//   document.getElementById("header").style.background="green";
// }


// this => jiske click ke ooper yah function call huva hain uski baat ho rahi 


// let element;

// document.getElementById("header").addEventListener("mouseenter",abc);

// document.getElementById("header").addEventListener("click",function(){
//   // this attribute => header ke click ke ooper yah function call huva tha uski baat ho rahi hain 
//   this.style.border = "10px solid black";
// });

// function abc(){
//   document.getElementById("header").style.background="green";
// }

// removeEventListener 

// let element;

// document.getElementById("header").addEventListener('mouseleave',abc);

// function abc(){
//   document.getElementById("header").style.background = "green";
// }


// let element;

// document.getElementById("header").addEventListener('mouseleave',abc);

// document.getElementById("header").addEventListener('click',xyz);

// function abc(){
//   document.getElementById("header").style.background = "green";
// }
// // removeEL
// function xyz(){
// document.getElementById("header").removeEventListener('mouseleave',abc);
// }

// classList Methods 

// let element;

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
//   document.getElementById("header").classList.add("xyz");
// }


// let element;

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
//   document.getElementById("header").classList.add("xyz","efg","mbs");

//   let a = document.getElementById("header").classList;

//   console.log(a);
// }

// remove 

// let element; 

// document.getElementById("header").addEventListener("click",abc);

// function abc(){
//   document.getElementById("header").classList.remove("xyz");

//   let a = document.getElementById("header").classList;

//   console.log(a);
// }

// length => classList []

// let element;

// document.getElementById("header").addEventListener("click",abc);

// function abc(){
//   let a = document.getElementById("header").classList.length;

//   console.log(a);
// }

// toggle => add / remove 

// let element; 

// document.getElementById("header").addEventListener("click",abc);

// function abc(){
//   document.getElementById("header").classList.toggle("xyz");

//   let a = document.getElementById("header").classList;

//   console.log(a);
// }


// item(index)

// let element; 

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
//   let a = document.getElementById("header").classList.item(0) ;

//   console.log(a);
// }


// let element; 

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
//   let a = document.getElementById("header").classList.item(1) ;

//   console.log(a);
// }


// let element; 

// document.getElementById("header").addEventListener('click',abc);

// function abc(){
//   let a = document.getElementById("header").classList.item(2) ;

//   console.log(a);
// }

// contains(class) => t / f 

// let element;

// document.getElementById("header").addEventListener("click",abc);

// function abc(){

//   let a = document.getElementById("header").classList.contains("xyz");//t 

//   console.log(a);
// }


// let element;

// document.getElementById("header").addEventListener("click",abc);

// function abc(){

//   let a = document.getElementById("header").classList.contains("abc");//t

//   console.log(a);
// }


// let element;

// document.getElementById("header").addEventListener("click",abc);

// function abc(){

//   let a = document.getElementById("header").classList.contains("efg");//t 

//   console.log(a);
// }


let element;

document.getElementById("header").addEventListener("click",abc);

function abc(){

  let a = document.getElementById("header").classList.contains("mbs");//f 

  console.log(a);
}