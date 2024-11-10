// filter()
// let ages = [10,12,19,20];
// document.write(ages + "<br><br>");
// let b = ages.filter(checkAdult);//[19,20]
// document.write(b + "<br><br>");
// function checkAdult(age){//10,12,19,20
// return age >= 18;//10>=18 => false,12>=18=>false,19>=18=>True,20>=18=>true
// }

let ages = [50,112,59,30];
document.write(ages + "<br><br>");
let b = ages.filter(checkAdult);//[50,112,59,30]
document.write(b + "<br><br>");
function checkAdult(age){//50,112,59,30]
return age >= 18;//50>=18=>true,112>=18=>t,59>=18=>t,30>=18=>t
}