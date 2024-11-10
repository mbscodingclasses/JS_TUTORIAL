// Array of Object 
// let student = [
//   {name:'Ram',age:15},
//   {name:'KK',age:13},
//   {name:'Rahul',age:14},
// ];
// console.log(student);
// // index start = 0, index < student.length , index = index + 1
// for(let index = 0; index < student.length; index = index + 1){
//   document.write(student[index] + "<br>");
// }


// let student = [
//   {name:'Ram',age:15},
//   {name:'KK',age:13},
//   {name:'Rahul',age:14},
// ];
// console.log(student);
// // index start = 0, index < student.length , index = index + 1
// for(let index = 0; index < student.length; index = index + 1){
//   document.write(student[index].name + "<br>");
// }


let student = [
  {name:'Ram',age:15},
  {name:'KK',age:13},
  {name:'Rahul',age:14},
];
console.log(student);
// index start = 0, index < student.length , index = index + 1
for(let index = 0; index < student.length; index = index + 1){//index=0,0<3=>t,index=1,1<3=>t , index = 2 , 2 < 3 => t , index=3 , 3 < 3 => False => loop => out 
  document.write(student[index].name + " " + student[index].age + "<br>");
  //student[0].name => Ram , student[0].age => 15
  // student[1].name => kk , student[1].age => 13 
  // student[2].name => Rahul , student[2].age=>14 
    }