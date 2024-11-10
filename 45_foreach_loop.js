// For Each Loop 
// let a = ["Rahul","KK","Aman","Navdeep"];
// // forEach => array ke har ek value 
// a.forEach(function(value){//parameter => variable => value = "Rahul","KK","Aman","Navdeep"
//   document.write(value + "<br>");
//   //Rahul 
//   //KK
//   //Aman
//   // Navdeep
// });

// index => 
//   let a = ["Rahul","KK","Aman","Navdeep"];
// // forEach => array ke har ek value 
// a.forEach(function(value , index){//parameter => variable => value = "Rahul","KK","Aman","Navdeep"
//   document.write(index + " : "+ value + "<br>");
//   //0 : Rahul 
//   //1 : KK
//   //2 : Aman
//   //3 : Navdeep
// });

let a = ["Rahul","KK","Aman","Neha"];
a.forEach(loop);
function loop(value,index){//" 0 : Rahul","1 : KK","2 : Aman","3 : Neha"
  document.write(index + " : " + value + "<br>");
  // 0 : Rahul
  // 1 : KK
  // 2 : Aman
  // 3 : Neha
}