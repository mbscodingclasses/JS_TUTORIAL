// let target = document.getElementById("list1").children[0] ; //orange

// let copyElement = target.cloneNode();

// console.log(copyElement);

// false => tag copy / attributes copy => not inner value 

// let target = document.getElementById("list1").children[0] ; //orange

// let copyElement = target.cloneNode(false) ;

// console.log(copyElement) ;

// note => inner value + tags + div + attributes

// let target = document.getElementById("list1").children[0] ; //orange

// let copyElement = target.cloneNode(true) ;

// console.log(copyElement);


// let target = document.getElementById("list1").children[0] ; //orange

// let copyElement = target.cloneNode(true) ;//  <li class="abc">Orange</li>

// console.log(copyElement);

// document.getElementById("list2").appendChild(copyElement) ;//orange => copy => ul => list2 



let target = document.getElementById("list1").children[0] ; //orange

let copyElement = target.cloneNode(true) ;//  <li class="abc">Orange</li>

console.log(copyElement) ;

document.getElementById("test").appendChild(copyElement) ;//orange => copy => div => append