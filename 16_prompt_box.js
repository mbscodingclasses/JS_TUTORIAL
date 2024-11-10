// Prompt Box In JS => user se kuch values ko get 
// prompt("What is your name ?");

// let a = prompt("What is Your Name ?");
// alert(a);

// let a = prompt("What is Your Name ?");
// document.write(a);

// User se => value => get => Value => Numeric , String , Yes / No 

// Percentage Grade 

// Prompt Box Use 

let Percentage = prompt("Enter your Percentage ? : ");
// >=80 && <=100
if(Percentage>=80 && Percentage<=100){
  document.write("You are In Merit ");
}
// >=60 && <80 / <=79 
else if(Percentage>=60 && Percentage<80){
  document.write("You are Ist Division ");
}
// >=45 && <60 / <=59 
else if(Percentage>=45 && Percentage<60){
  document.write("You are In IInd Divison ");
}
// >=33 && <45 / <=44 
else if(Percentage>=33 && Percentage<45){
  document.write("You are In IIIrd Division ");
}
// < 33 
else if(Percentage<33){
document.write("You are Fail ");
}
// Random => 101 , 10111111 
else {
  document.write("Plese Enter Valid Percentage ");
}
