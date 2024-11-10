// Nested loop => Ex.

// Outer Loop => Row
// for(let a=1;a<=5;a=a+1){//a=1,1<=5=>true ,a=2,2<=5=>true,a=3,3<=5=>true,a=4,4<=5=>true,a=5,5<=5=>true,a=6,6<=5=>False=>Out of loop
// // Inner Loop => Col
// for(let b=1;b<=a;b=b+1){//b=1,1<=1=>t,b=2,2<=1 =>False ,b=1,a=2,1<=2=>true,b=2,2<=2=>true,b=3,3<=2=>False,b=1,1<=3=>true,b=2,2<=3=>true,b=3,3<=3=>true,b=4,4<=3=>False,b=1,1<=4=>true,b=2,2<=4=>true,b=3,3<=4=>true,b=4,4<=4=>true,b=5,5<=4 => False,b=1,1<=5=>true,b=2,2<=5=>true,b=3,3<=5=>true,b=4,4<=5=>true,b=5,5<=5=>true,b=6,6<=5=>False 
//   document.write(b + " ");
//   // 1 
//   // 1 2 
//   // 1 2 3 
//   // 1 2 3 4 
//   // 1 2 3 4 5 

// }
// document.write("<br>");//New Line, New Line , New Line , New Line, New Line
// }


// outer loop => row
// for(let a=1;a<=5;a++){//a=1,1<=5=>t,a=2,2<=5=>t,a=3,3<=5=>true,a=4,4<=5=>True,a=5,5<=5=>true,a=6,6<=5=>False 
//   // inner loop => col 
//   for(let b=1;b<=a;b++){//b=1,a=1,b<=1=>t,b=2,2<=1=>false,b=1,a=2,1<=2=>t,b=2,2<=2=>t,b=3,3<=2=>False,a=3,b=1,1<=3=>true,b=2,2<=3=>true,b=3,3<=3=>true,b=4,4<=3=>False,b=1,a=4,1<=4=>true,b=2,2<=4=>true,b=3,3<=4=>true,b=4,4<=4=>true,b=5,5<=4=>False,b=1,a=5,1<=5=>true,b=2,2<=5=>true,b=3,3<=5=>true,b=4,4<=5=>true,b=5,5<=5=>True,b=6,6<=5=>False
//     document.write(a + " ");
//     // 1 
//     // 2 2 
//     // 3 3 3 
//     // 4 4 4 4 
//     // 5 5 5 5 5 
//   }
//   document.write("<br>");//new line, new line,New Line , New Line , New Line
// }

// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1 

// Outer loop - row 
// for(let a = 5 ; a >= 1 ; a = a - 1 ){//a=5,5>=1=>t,a=4,4>=1=>t,a=3,3>=1=>t,a=2,2>=1=>t,a=1,1>=1=>t,a=0,0>=1=>False
//   // Inner loop - col
//   for(let b = 1; b <= a; b = b + 1){//b=1,a=5,1<=5=>t,b=2,2<=5=>t,b=3,3<=5=>t,b=4,4<=5=>t,b=5,5<=5=>t,b=6,6<=5=>False,b=1,a=4,1<=4=>t,b=2,2<=4=>t,b=3,3<=4=>t,b=4,4<=4=>t,b=5,5<=4=>False,b=1,a=3,1<=3=>t,b=2,2<=3=>t,b=3,3<=3=>t,b=4,4<=3=>False,b=1,a=2,1<=2=>t,b=2,2<=2=>t,b=3,3<=2=>False,b=1,a=1,1<=1=>t,b=2,2<=1=>False
//     document.write(a + " ");
//     // 5 5 5 5 5 
//     // 4 4 4 4 
//     // 3 3 3 
//     // 2 2 
//     // 1 
//   }
//   document.write("<br>");//New Line , New Line , New Line , New Line , New line
// }

// 5 4 3 2 1 
// 4 3 2 1
// 3 2 1 
// 2 1 
// 1 

// Outer loop - row 
for(let a = 5 ; a >= 1; a = a - 1 ){//a=5,5>=1=>t,a=4,4>=1=>t,a=3,3>=1=>t,a=2,2>=1=>t,a=1,1>=1=>t,a=0,0>=1=>False
  // Inner Loop - col
for(let b = a; b >= 1; b = b - 1 ){//a=5,b=5,5>=1=>t,b=4,4>=1=>t,b=3,3>=1=>t,b=2,2>=1=>t,b=1,1>=1=>t,b=0,0>=1=>false,a=4,b=4,4>=1=>t,b=3,3>=1=>t,b=2,2>=1=>t,b=1,1>=1=>t,b=0,0>=1=>false,a=3,b=3,3>=1=>t,b=2,2>=1=>t,b=1,1>=1=>t,b=0,0>=1=>False,b=2,a=2,2>=1=>t,b=1,1>=1=>t,b=0,0>=1=>False,a=1,b=1,1>=1=>True,b=0,0>=1=>False
  document.write(b + " ");
  // 5 4 3 2 1 
  // 4 3 2 1 
  // 3 2 1 
  // 2 1 
  // 1 
}
document.write("<br>");//New Line , New Line , New Line , New Line, New Line
}