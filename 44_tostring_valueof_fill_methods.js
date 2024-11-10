// toString => array => string 
// let a = ["Rahul","KK","Aman","Navdeep"];//array
// document.write(a + "<br><br>");//array => object
// document.write(typeof(a) + "<br><br>");//array => object
// let b = a.toString();//string 
// document.write(b + "<br><br>");//string 
// document.write(typeof(b) + "<br><br>");//string

// valueOf() => Default => arrays values => document.write
// let a = ["Rahul","KK","Aman","Navdeep"];
// document.write(a.valueOf());//"Rahul","KK","Aman","Navdeep"

// let a = ["Rahul","KK","Aman","Navdeep"];
// document.write(a);//"Rahul","KK","Aman","Navdeep"


// fill()
let a = ["Rahul","KK","Aman","Navdeep"];
a.fill("Ram");//static value => new array
document.write(a);["Ram","Ram","Ram","Ram"]
