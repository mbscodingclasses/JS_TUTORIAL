// let newElement = document.createElement("h2");//<h2></h2>

// let newText = document.createTextNode("This is just text : Mbs Coding");//This is just text : Mbs Coding

// newElement.appendChild(newText);//<h2>This is just text : Mbs Coding</h2>

// console.log(newElement);////<h2>This is just text : Mbs Coding</h2>

// append on div 

// let newElement = document.createElement("h2");//<h2></h2>

// let newText = document.createTextNode("This is just text : Mbs Coding");//This is just text : Mbs Coding

// newElement.appendChild(newText);//<h2>This is just text : Mbs Coding</h2>

// document.getElementById("test").appendChild(newElement);

// console.log(newElement);////<h2>This is just text : Mbs Coding</h2>


// let newElement = document.createElement("h2");//<h2></h2>

// let newText = document.createTextNode("This is just text : Mbs Coding");//This is just text : Mbs Coding

// let newComment = document.createComment("This is just comment : Mbs Coding");

// newElement.appendChild(newText);//<h2>This is just text : Mbs Coding</h2>

// document.getElementById("test").appendChild(newElement);

// document.getElementById("test").appendChild(newComment);

// console.log(newElement);////<h2>This is just text : Mbs Coding</h2>

// Note : appendChild() => last me hi => append



// let newElement = document.createElement("h2");//<h2></h2>

// let newText = document.createTextNode("This is just text : Mbs Coding");//This is just text : Mbs Coding

// // let newComment = document.createComment("This is just comment : Mbs Coding");

// newElement.appendChild(newText);//<h2>This is just text : Mbs Coding</h2>

// // document.getElementById("test").appendChild(newElement);

// // document.getElementById("test").appendChild(newComment);

// // insert before 

// let target = document.getElementById("test");//div

// target.insertBefore(newElement,target.childNodes[0]);//0 se pahle bhi => h2 => append
// // jisko insert karna hain , kisse pahle insert karna
// console.log(newElement);////<h2>This is just text : Mbs Coding</h2>



// let newElement = document.createElement("h2");//<h2></h2>

// let newText = document.createTextNode("This is just text : Mbs Coding");//This is just text : Mbs Coding

// let newComment = document.createComment("This is just comment : Mbs Coding");

// newElement.appendChild(newText);//<h2>This is just text : Mbs Coding</h2>

// document.getElementById("test").appendChild(newElement);

// document.getElementById("test").appendChild(newComment);

// insert before 

// let target = document.getElementById("test");//div

// target.insertBefore(newElement,target.childNodes[2]);//2 se pahle bhi => h2 => append
// // jisko insert karna hain , kisse pahle insert karna
// console.log(newElement);////<h2>This is just text : Mbs Coding</h2>


/*****************/

// inseertAdjacentElement

// let newElement = document.createElement("h2");//<h2>

// let newText = document.createTextNode("Mbs Coding");//

// let target = document.getElementById("test");

// target.insertAdjacentElement("beforebegin",newElement) ;

// beforebegin 

// let newElement = document.createElement("h2");//<h2>

// let newText = document.createTextNode("Mbs Coding");//

// newElement.appendChild(newText); // <h2>Mbs</h2>

// let target = document.getElementById("test");//div

// target.insertAdjacentElement("beforebegin",newElement) ;//div => beforeBegin => div shuru hone se pahle => newElement => <h2>Mbs Coding</h2>


// afterbegin 


// let newElement = document.createElement("h2");//<h2>

// let newText = document.createTextNode("Mbs Coding");//

// newElement.appendChild(newText); // <h2>Mbs oding</h2>

// let target = document.getElementById("test");//div

// target.insertAdjacentElement("afterBegin",newElement) ;//div => adterBegin => div shuru hone ke just baad => newElement => <h2>Mbs Coding</h2>

// insertAdjacentHTML

// createElement & createTextNode => no 

// afterEnd 

// let target = document.getElementById("test");//div

// let newElement = "<h2>This is Heading</h2>"

// target.insertAdjacentHTML("afterend",newElement);//div khatam hone ke baad => just baad => <h2>This is Heading</h2>

// beforeend


// let target = document.getElementById("test");//div

// let newElement = "<h2>This is Heading</h2>"

// target.insertAdjacentHTML("beforeend",newElement);//div just  khatam hone ke se pahle => <h2>This is Heading</h2> => append  / insert 

// insertAdjacentText 

// let target = document.getElementById("test");//div

// let newText = "Mbs Coding"; 

// target.insertAdjacentText("beforeend",newText);//div ke end hone se just pahle => Mbs Coding text=> append => insert 

//afterend 


// let target = document.getElementById("test");//div

// let newText = "Mbs Coding"; 

// target.insertAdjacentText("afterend",newText);//div ke end hone ke baad => Mbs Coding text=> append => insert 


// beforebegin 

// let target = document.getElementById("test");//div

// let newText = "Mbs Coding"; 

// target.insertAdjacentText("beforebegin",newText);//div shuru hone se just pahle => append 

// afterbegin

let target = document.getElementById("test");//div

let newText = "Mbs Coding"; 

target.insertAdjacentText("afterbegin",newText);//div shuru hone ke  just baad => append 





