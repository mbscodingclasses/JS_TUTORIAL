// creating an object => method 2 
// let person = new Object();
// person.firstName = "Ram";
// person.lastName = "Kapoor";
// person.age = 25;
// document.write(person + "<br><br>");//object object 
// document.write(person.firstName + "<br><br>");
// document.write(person.lastName + "<br><br>");
// document.write(person.age + "<br><br>");
// console.log(person);


let person = new Object();
person.firstName = "Ram";
person.lastName = "Kapoor";
person.age = 25;
document.write(person['firstName'] + "<br>");
document.write(person['lastName'] + "<br>");
document.write(person['age'] + "<br>");