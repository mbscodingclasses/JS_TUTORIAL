// Break & Continue 

// for(let a = 1 ; a <= 10 ; a++){// a = 1 , a <= 10 => 1 <= 10 => t => Print => a++ => a = a + 1 => 1 + 1 => 2 => a = 2 =>  2 <= 10 => t => print , a = 3 , 3 <= 10 => t , a = 4 , 4 <= 10 => t => Print , a = 5 , 5 <= 10 => t => Print, a = 6 , 6 <= 10 => t => Print , a = 7 , 7 <= 10 => t => Print , a = 8 , 8 <= 10 => t => Print => a = 9 , 9 <= 10 => t => Print , a = 10 , 10 <= 10 => t => Print , a = a + 1 => a = 10 + 1 => 11 => a = 11 , 11 <= 10 => false => out of loop
//   document.write("Number : " + a + "<br>");//Number : 1 , Number : 2 , Number : 3 , Number : 4 , Number : 5 ,  Number : 6 , Number : 7 , Number : 8  , Number : 0 , Number : 10 
// }

// Dry run => a <= 4 
// for(let a = 1 ; a <= 10 ; a++){// a=1,1<=10=>t ,a=2,2<=10=>t,a=3,3<=10=>t,a=4,4<=10=>t
//   if(a==3){//1==3=>false , 2==3=>false , 3==3 => true , 4==3=>false 
//     document.write("Hello : " + a + "<br>");//Hello 3 
//     // Continue statement  => for loop => continue 
//     // continue => for loop ke saath 
//     continue; // niche wale statement mat pado => direct => for loop
//   }
//   document.write("Number : " + a + "<br>");//Number : 1 , Number : 2 , Number : 4
// }

// Number : 1 
// Number : 2 
// Hello : 3 
// Number : 4


// Break => directly break => niche mat javo => loop se baahar 


// a=4 => dry run
for(let a = 1 ; a <= 10 ; a++){// a=1,1<=10=>t=>,a=2 , 2<=10 => t , a = 3 , 3<=10=>t
  if(a==3){//1==3=>false,2==3=>false,3==3=>true
    document.write("Hello : " + a + "<br>");//Hello 3 
    break;//Niche Wale Part Ko Chalane Ki Jarurat Nahi Hain => Loop ke baahar => Main break hu
  }
  document.write("Number : " + a + "<br>");//Number : 1 , Number : 2 , 
}

// Number : 1  
// Number : 2 
// Hello 3