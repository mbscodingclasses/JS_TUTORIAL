// find & findindex => function 
// let ages = [10,23,19,20];
// document.write(ages + "<br><br>" );
// let b = ages.find(checkAdult);//23
// document.write(b + "<br><br>");//23
// function checkAdult(age){//10,23,19,20
// return age >= 18;//10>=18 => f,23>=18 => true 
// }

// findIndex() => index => values => cond => satisfy 

// let ages = [10,23,19,20];
// document.write(ages + "<br><br>");
// let b = ages.findIndex(checkAdult);//1st index
// document.write(b+"<br><br>");//1
// function checkAdult(age){//10,23,19,20
//   return age >= 18;//10>=18=>f,23>=18=>True
// }


// let ages = [10,13,19,20];
// document.write(ages + "<br><br>");
// let b = ages.findIndex(checkAdult);//2st index
// document.write(b+"<br><br>");//2
// function checkAdult(age){//10,13,19,20
//   return age >= 18;//10>=18=>f,13>=18=>f,19>=18=>True 
// }

let ages = [10,13,17,9];
document.write(ages + "<br><br>");
let b = ages.findIndex(checkAdult);//index => -1 
document.write(b+"<br><br>");//-1
function checkAdult(age){//10,13,17,9
  return age >= 18;//10>=18=>f,13>=18=>f,17>=18=>f,9>=18=>f
}