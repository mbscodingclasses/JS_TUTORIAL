// Some & Every method
// let ages = [10,13,18,20];
// document.write(ages + "<br><br>");
// // some() => true / false 
// let b = ages.some(checkAdult);
// document.write(b + "<br><br>");
// function checkAdult(age){
// return age >= 18; // return => jidar fun call => value
// }

// let ages = [10,13,15,20];
// document.write(ages + "<br><br>");
// // some() => true / false 
// let b = ages.some(checkAdult);
// document.write(b + "<br><br>");
// function checkAdult(age){
// return age >= 18; // return => jidar fun call => value
// }

// let ages = [10,13,15,16];
// document.write(ages + "<br><br>");
// // some() => true / false 
// let b = ages.some(checkAdult);
// document.write(b + "<br><br>");
// function checkAdult(age){
// return age >= 18; // return => jidar fun call => value
// }

// let ages = [10,13,15,16];
// document.write(ages + "<br><br>");
// // some() => true / false 
// let b = ages.some(checkAdult);//false
// document.write(b + "<br><br>");//false
// function checkAdult(age){//10,13,15,16
// return age >= 18; // return => jidar fun call => value //10>=18=>f,13>=18=>f,15>=18=>f,16>=18=>f => false
// }

// every() => all values => cond => satisfy => trru => adult age 

// let ages = [19,20,21,22];
// document.write(ages + "<br><br>");
// let b = ages.every(checkAdult);//true
// document.write(b + "<br><br>");//true
// function checkAdult(age){//19,20,21,22
// return age >= 18; //19>=18 => t , 20>=18 => t , 21>=18 => t , 22>=18 => t => true
// }


let ages = [16,21,34,17];
document.write(ages + "<br><br>");
let b = ages.every(checkAdult);//false
document.write(b + "<br><br>");//false
function checkAdult(age){//16,21,34,17
return age >= 18; //16>=18=>f,21>=18=>t,34>=18=>t,17>=18=>t => false
}

// Note : 

// every() => all values check => all values => cond => satisfy => true 

// some()  => ek bhi true => true