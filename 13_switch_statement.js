// Switch statement in JS
// let day = 0;
// let day = 1;
// let day = 2;
// let day = 3;
// let day = 4;
// let day = 5;
// let day = 6;
// let day = 7;
// // case => 1 , 2 , 3 => day => hafte 
// switch(day){
//   case 0://0 == 0 => t 
//     document.write("Today is Monday");//Print
//   break;
//   case 1: //1 == 1 => t 
//   document.write("Today is Tuesday");
//   break;
//   case 2: // 2 == 2 => t 
//   document.write("Today is Wednesday");
//   break;
//   case 3: // 3 == 3 => t 
//   document.write("Today is Thursday");
//   break;
//   case 4: // 4 == 4 => t 
//   document.write("Today is Friday");
//   break;
//   case 5: // 5 == 5 => t 
//   document.write("Today is Saturday");
//   break;
//   case 6: // 6 == 6 => t 
//   document.write("Today is Sunday");
//   break;
//   default://7
//     document.write("Enter the Valid Week Day");
// }

// let day = 0;
// let day = 1;
// let day = 2;
// // let day = 3;
// // case => 1 , 2 , 3 => day => hafte 
// switch(day){
//   case 0 : case 1 : case 2 ://0 == 0 => t 
//     document.write("Today is Monday0 <br>");//Print
//     document.write("Today is Monday1<br>");//Print
//     document.write("Today is Monday2");//Print
//   break;
//   case 3: // 3 == 3 => t 
//   document.write("Today is Thursday");
//   break;
//   case 4: // 4 == 4 => t 
//   document.write("Today is Friday");
//   break;
//   case 5: // 5 == 5 => t 
//   document.write("Today is Saturday");
//   break;
//   case 6: // 6 == 6 => t 
//   document.write("Today is Sunday");
//   break;
//   default://7
//     document.write("Enter the Valid Week Day");
// }

// comp oper => s c 

// let age = 15;
// let age = 25;
let age = 35;
switch(true){//15 , 25 , 35 
  case (age>=15 && age<=20)://15>=15 && 15<=20 => true && true => true , 25>=15 && 25<=20 => true && false => false , 35 >= 15 && 35<=20 => true && false => false 
    document.write("You are Eligible");//Print , Not Print , Not Print 
    break;
    case (age>=21 && age<=30):// 25>=21 && 25<=30 => true && true => true , 35>=21 && 35<=30 => true && false => false 
      document.write("You are Not Eligible");//Print , Not Print 
    break;  
   default://35 
    document.write("Enter The Valid Age!");//Print 
}
