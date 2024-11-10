// Objects 
// let a = {
//   firstName:"Mbs",
//   lastName:"Coding",
//   age:25,
//   email:"hello@mbscoding.com"
// }
// document.write(a);//object object
// console.log(a);
//  console.log(a.firstName);
//  console.log(a.lastName);
// document.write(a.firstName + "<br>");
// document.write(a.lastName + "<br>");
// document.write(a.age+ "<br>");
// document.write(a.email + "<br>");

// let a = {
//     firstName:"Mbs",
//     lastName:"Coding",
//     age:25,
//     email:"hello@mbscoding.com",
//     favoraiteMovie:['October','96','Hindi Medium']
//   }
  // console.log(a);
  // document.write(a.favoraiteMovie + "<br><br>");
  // document.write(a.favoraiteMovie[0] + "<br><br>");
  // document.write(a.favoraiteMovie[1] + "<br><br>");
  // document.write(a.favoraiteMovie[2] + "<br><br>");

  
// let a = {
//   // properties => fn,ln,age,email but salary & fullname => methods => function => object
//   firstName:"Mbs",
//   lastName:"Coding",
//   age:25,
//   email:"hello@mbscoding.com",
//   favoraiteMovie:['October','96','Hindi Medium'],
//   // Methods => object => function => salary & fullname 
//   salary:function(){
//     return 12000;
//   },
//   fullname:function(){
//     return this.firstName + " " + this.lastName ;
//   }
// }
// console.log(a);
// document.write(a.salary() + "<br><br>");
// document.write(a.fullname());//error 
// // error => dur => this keyword 

// // Note : this => ownwer => a var => a object 
// // owner => this keyword 

 
let a = {
  // properties => fn,ln,age,email but salary & fullname => methods => function => object
  firstName:"Mbs",
  lastName:"Coding",
  age:25,
  email:"hello@mbscoding.com",
  favoraiteMovie:['October','96','Hindi Medium'],
  living:{
    'city':'Pune',
    'country':'India'
  },
  // Methods => object => function => salary & fullname 
  salary:function(){
    return 12000;
  },
  fullname:function(){
    return this.firstName + " " + this.lastName ;
  }
}
console.log(a);
// document.write(a.salary() + "<br><br>");
// document.write(a.fullname());//error 
// error => dur => this keyword 
// Note : this => ownwer => a var => a object 
// owner => this keyword 
document.write(a.living.city + "<br>");
document.write(a.living.country + "<br>");