// Multidimensional Array : 
// let array = [
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["D",17,"Male","B.A"]
// ];
// // Outer loop => outer array 
// // Index start = 0
// for(let index1 = 0; index1 <= 3; index1 = index1 + 1){
//   // inner loop => inner array
// // index start = 0 , index <= 3 , index = index + 1
// for(let index2 = 0 ; index2 <= 3 ; index2 = index2 + 1 ){
//   document.write(array[index1][index2] + " ");
// }
// document.write("<br>");
// }


// let array = [
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["D",17,"Male","B.A"]
// ];
// document.write(array[3][0]);

// Data => Table ke format 
// Real Life => Data => Php , .net => Table => JS

// let array = [
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["D",17,"Male","B.A"]
// ];
// // Outer loop => outer array 
// // Index start = 0
// // table tag 
// document.write("<table border='1px' cellspacing='0'>");
// for(let index1 = 0; index1 <= 3; index1 = index1 + 1){
//   // inner loop => inner array
// // index start = 0 , index <= 3 , index = index + 1
// // table row => tr 
// document.write("<tr>");
// for(let index2 = 0 ; index2 <= 3 ; index2 = index2 + 1 ){
//   document.write("<td>" + array[index1][index2] + "</td>");
// }
// // document.write("<br>");
// document.write("</tr>");
// }
// document.write("</table>");

// Array => length 

// let array = [
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["D",17,"Male","B.A"]
// ];
// document.write(array.length);

let array = [
  ["A",18,"Male","B.Com"],
  ["B",19,"Male","BCA"],
  ["C",18,"Male","BCA"],
  ["D",17,"Male","B.A"]
];
// Outer loop => outer array 
// Index start = 0
// table tag 
document.write("<table border='1px' cellspacing='0'>");
for(let index1 = 0; index1 < array.length; index1 = index1 + 1){//index1=0,0<4=>t,index1=1,1<4=>t,index1=2,2<4=>true,index1=3,3<4=>true,index1=4,4<4=>False
  // inner loop => inner array
// index start = 0 , index <= 3 , index = index + 1
// table row => tr 
document.write("<tr>");
for(let index2 = 0 ; index2 < array[index1].length ; index2 = index2 + 1 ){//index2=0,0<4=>t,index2=1,1<4=>t,index2=2,2<4=>t,index2=3,3<4=>t,index2=4,4<4=>False,index2=0,0<4=>t,index2=1,1<4=>t,index2=2,2<4=>t,index2=3,3<4=>t,index2=4,4<4=>False,index2=0,0<4=>t,index2=1,1<4=>t,index2=2,2<4=>true,index2=3,3<4=>t,index2=4,4<4=>False,index2=0,0<4=>t,index2=1,1<4=>t,index2=2,2<4=>t,index2=3,3<4=>t,index2=4,4<4=>False
  document.write("<td>" + array[index1][index2] + "</td>");//array[0][0]=>A,array[0][1]=>18,array[0][2]=>Male,array[0][3]=>BCOM,array[1][0]=>B,array[1][1]=>19,array[1][2]=>Male,array[1][3]=>BCA,array[2][0]=>C,array[2][1]=>18,array[2][2]=>Male,array[2][3]=>BCA,array[3][0]=>D,array[3][1]=>17,array[3][2]=>Male,array[3][3]=>B.A
}
// document.write("<br>");
document.write("</tr>");
}
document.write("</table>");


// let array = [
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["A",18,"Male","B.Com"],
//   ["B",19,"Male","BCA"],
//   ["C",18,"Male","BCA"],
//   ["D",17,"Male","B.A"]
// ];
// // Outer loop => outer array 
// // Index start = 0
// // table tag 
// document.write("<table border='1px' cellspacing='0'>");
// for(let index1 = 0; index1 < array.length; index1 = index1 + 1){
//   // inner loop => inner array
// // index start = 0 , index <= 3 , index = index + 1
// // table row => tr 
// document.write("<tr>");
// for(let index2 = 0 ; index2 < array[index1].length ; index2 = index2 + 1 ){
//   document.write("<td>" + array[index1][index2] + "</td>");
// }
// // document.write("<br>");
// document.write("</tr>");
// }
// document.write("</table>");