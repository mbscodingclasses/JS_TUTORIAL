// For in loop
// let obj = {
//   firstName:"Mbs",
//   lastName:"Coding",
//   age:25,
//   email:"hello@mbscoding.com"
// };
// for(let key in obj){//key = firstName , key = lastName , key = age , key = email
// document.write(obj[key] + "<br>");
// //obj[firstName] = Mbs 
// //obj[lastName] = Coding 
// //obj[age] = 25 
// //obj[email] = hello@mbscoding.com
// }


let obj = {
  firstName:"Mbs",
  lastName:"Coding",
  age:25,
  email:"hello@mbscoding.com"
};
for(let key in obj){//key = firstName , key = lastName , key = age , key = email
document.write(key + " : " + obj[key] + "<br>");
//firstName : obj[firstName] = Mbs 
//lastName  : obj[lastName] = Coding 
//age       : obj[age] = 25 
//email     : obj[email] = hello@mbscoding.com
}