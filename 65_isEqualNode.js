// let target1 = document.getElementById("list-1").firstElementChild ;  // <li class="abc">orange</li>

// let target2 = document.getElementById("list-2").firstElementChild ; //  <li>Guava</li>

// let equal = target1.isEqualNode(target2); // false

// console.log(equal);

// let target1 = document.getElementById("list-1").firstElementChild ;  // <li class="abc">orange</li>

// let target2 = document.getElementById("list-2").children[1]; //  <li class="abc">orange</li>

// let equal = target1.isEqualNode(target2); // true

// console.log(equal);


let target1 = document.getElementById("list-1").firstElementChild ;  // <li class="abc">orange</li>

let target2 = document.getElementById("list-2").children[1]; //  <li class="abc">orange</li>

let equal = target1.isEqualNode(target2); // true

console.log(equal);

