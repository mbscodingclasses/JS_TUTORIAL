// Global & Local Variables 

// Global Variable => Function uske bahar declare 
// let a = "Mbs Coding";
// function hello(){
//   document.write(a);//Mbs Coding
// }
// hello();

// Global Variable => Function uske bahar declare 
// Note : Global Variable => function ke baahar kaam & yah function ke andar bhi kaam 

// let a = "Mbs Coding";
// function hello(){
//   document.write(a + "<br>");//Mbs Coding
// }
// hello();
// document.write(a);//Mbs Coding

// let a = "Mbs Coding";
function hello(){
  // Local Variable => function ke andar hi kaam kar sakta hain => lv 
  let a = "Mbs Coding";
  document.write(a + "<br>");//Mbs Coding // lv
}
hello();
document.write(a);// error => local var => function ke baahar work nahi karta 
