// indexOf() => index 

// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.indexOf("Aman");//1st index => Aman 
// document.write(b);//1st index


// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.indexOf("Ram");// 2
// document.write(b);//2



// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.indexOf("Aman" , 2);// find => Aman , kahase dhundo => 2nd index se => 3rd index 
// document.write(b);// 3rd index



// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.indexOf("Sachin",2);// 
// // Note :  Agar humare array ke andar => value exist nahi karti => to wah => -1 de dega 
// document.write(b);// -1

// lastIndexOf()
// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.lastIndexOf("Aman");//3rd index
// document.write(b + "<br><br>");//3rd 

// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.lastIndexOf("Aman",2);//1st index
// document.write(b + "<br><br>");//1st index

// let a = ["Sita","Aman","Ram","Aman","Rahul"];
// document.write(a + "<br><br>");
// let b = a.lastIndexOf("Sachin");// -1
// document.write(b + "<br><br>");// -1

// Note : lastIndexOf() => internet  explorer => 8 => old => nahi chalta 

let a = ["Sita","Aman","Ram","Aman","Rahul"];
document.write(a + "<br><br>");
let b = a.indexOf("Aman",2);//3rd index
document.write(b+"<br><br>");//3
let c = a.lastIndexOf("Aman",2);//1st index
document.write(c + "<br><br>");//1 