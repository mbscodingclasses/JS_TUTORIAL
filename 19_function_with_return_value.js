// Functions With Return Value
// function fullName(fname="Mbs",lname="Coding"){//function declaration , fname="Sachin",lname="Tendulakar"
//   let a = fname + " " + lname; //Sachin Tendulakar
//   // Jahase function call => Wahape chala jayega => return => a => variable 
//   return a; //Sachin Tendulakar
// }
// // fullName naam ka jo function hain usko Sachin Tendulakar return huva hain 
// let stored = fullName("Sachin","Tendulakar");//Sachin Tendulakar
// document.write(stored);//Sachin Tendulakar

// function fullName(fname="Mbs",lname="Coding"){//function declaration , fname="Sachin",lname="Tendulakar"
//   let a = fname + " - " + lname; //Sachin Tendulakar
//   // Jahase function call => Wahape chala jayega => return => a => variable 
//   return a; //Sachin - Tendulakar
// }
// // fullName naam ka jo function hain usko Sachin Tendulakar return huva hain 
// let stored = fullName("Sachin","Tendulakar");//Sachin - Tendulakar
// document.write(stored);//Sachin - Tendulakar

// function sum(math,english,science){//math=55,english=65,science=75
// let sumOfMarks = math + english + science;//sumOfMarks=55+65+75 =>  sumOfMarks=195
// // Jahase fun call => return chala jayega 
// return sumOfMarks;//195
// }
// let totalMarks=sum(55,65,75);//195
// document.write(totalMarks);//195

function sum(math,english,science){//math=55,english=65,science=75
  let sumOfMarks = math + english + science;//sumOfMarks=55+65+75 =>  sumOfMarks=195
  // Jahase fun call => return chala jayega 
  return sumOfMarks;//195
  }
  function percentage(totalsumofmarks){//195 , 240 
    // 3 subject => 100 me se => 100*3=300
    // percentage = total aapke jitne marks / total marks(300) * 100 
 let realPercentage=totalsumofmarks/300 * 100;
 //195/300*100=>195/3 => 65 , 240 / 300 * 100 => 240 / 3 => 80 
 document.write(realPercentage);//65 , 80 
  }
  // let totalMarks=sum(55,65,75);//195
  let totalMarks=sum(80,80,80);//240 
  // document.write(totalMarks);//195
  percentage(totalMarks);//195