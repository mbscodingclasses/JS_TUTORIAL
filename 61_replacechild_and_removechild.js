// let newElement = document.createElement("li"); //<li>

// let newText = document.createTextNode("Mbs Coding");//Mbs Coding

// newElement.appendChild(newText);//<li>Mbs Coding</li>

// let target = document.getElementById("list"); //ul

// let oldElement = target.children[0] ; //orange

// // console.log(oldElement);

// target.replaceChild(newElement,oldElement);//<li>Mbs Coding</li> , orange => Mbs Coding Chahiye => Orange Ki Jagah 

// let newElement = document.createElement("li"); //<li>

// let newText = document.createTextNode("Mbs Coding");//Mbs Coding

// newElement.appendChild(newText);//<li>Mbs Coding</li>

// let target = document.getElementById("list"); //ul

// let oldElement = target.children[1] ; //Apple

// // console.log(oldElement);

// target.replaceChild(newElement,oldElement);//<li>Mbs Coding</li> , Apple => Mbs Coding Chahiye => Apple Ki Jagah 


// removeChild()

// let target = document.getElementById("list"); //<ul>

// let oldElement = target.children[0];//orange 

// target.removeChild(oldElement);//orange remove 


let target = document.getElementById("list"); //<ul>

let oldElement = target.children[1];//Apple

target.removeChild(oldElement);//Apple remove 



