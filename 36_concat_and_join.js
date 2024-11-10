// Concat => Jodta => 2 Arrays 
// 1 . 
// let array1 = ["Sita","Aman","Ram"];
// document.write(array1+"<br><br>");
// let array2 = array1.concat("Rahul","KK");
// document.write(array2);

// 2 . 
// let array1 = ["Sita","Aman","Ram"];
// let array2 = ["Rahul","KK"];
// let array = array1.concat(array2);
// document.write(array);//["sita","aman","ram","rahul","kk"]


// let array1 = ["Sita","Aman","Ram"];
// let array2 = ["Rahul","KK"];
// let array = array2.concat(array1);
// document.write(array);//"Rahul","KK","Sita","Aman","Ram"


// JS => Multiple arrays => jod 
// let a =  ["sita","aman","ram"];
// let b = ["rahul","kk"];
// let d = ["neha","sharma"];
// let c = a.concat(b,d);//sita,aman,ram,rahul,kk,neha,sharma
// document.write(c);

// Join method => 
let a = ["sita","aman","ram"];
let b = ["rahul","kk"];
let c = a.concat(b);//array
document.write(typeof(c)+"<br>");//array
document.write(c + "<br><br>");
let d = c.join("-");//array ko string convert
document.write(d+"<br>");
document.write(typeof(d));//string
