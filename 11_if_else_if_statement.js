// If Else If Statement
/*
Percentage                Grade 
80-100%                  Merit 
60-79%                   1st Div
45-59%                   IInd Div
33-44%                   IIIrd Div
Less than 33%            Fail
*/
// let Percentage = 55;
// let Percentage = 59;
// let Percentage = 60;
// let Percentage = 89;
// let Percentage = 120;
// let Percentage = 1;
// let Percentage = 0.5;
let Percentage = -55;
// >=80 && <=100 
if(Percentage>=80 && Percentage<=100){//89>=80 && 89<=100 => t && t => t => 89 
  document.write("You are in Merit");//89
}
// >=60 && <80 / <=79 
else if(Percentage>=60 && Percentage<80){//60>=60 && 60<80 => t && t => t => 60 
  document.write("You are in Ist Division");//60
}
// >=45 && <60 / <=59 
else if(Percentage>=45 && Percentage<60){//55>=45 && 55<60 => t && t => t , 59>=45 && 59<60 => t && t => t => 59 
  document.write("You are In IInd Division");//55
}
// >=33 && <45 / <=44 
else if(Percentage>=33 && Percentage<45){
  document.write("You are in IIIrd Division");
}
// <33 
else if(Percentage<33){//1 < 33 => t , 0.5 < 33 => t , -55 < 33 => t 
  document.write("You are Fail");//1 , 0.5 , -55
}
// else => 101 , 102 , 18239823
else{//120 
document.write("Plese Enter a Valid Percentage");
}