// Array create new method 


// create array method

// let array = new Array(10,"Bumrah","Shami",true,null);
// document.write("<ul>");
// // index start = 0 , index end = 4 ,  index = index + 1
// for(let index = 0 ; index <= 4 ; index = index + 1){//index=0,0<=4=>t,index=1,1<=4=>t,index=2,2<=4=>t,index=3,3<=4=>t,index=4,4<=4=>t,index=5,5<=4=>False
//   document.write("<li>" + array[index] + "</li>");//array[0]=>10,array[1]=Bumrah,array[2]=Shami,array[3]=true,array[4]=null,
// }
// document.write("</ul>");

// let array = new Array();
// // 0th index start
// array[0] = 10;
// array[1] = "Mbs Coding";
// array[3] = true;
// document.write("<ul>");
// // index start = 0 , index<=4 , index = index + 1
// // index < 5
// for(index = 0; index <= 4 ; index = index + 1){//index=0,0<=4=>t,index=1,1<=4=>t,index=2,2<=4=>t,index=3,3<=4=>t,index=4,4<=4=>t,index=5,5<=4=>False
//   document.write("<li>" + array[index] + "</li>");//array[0]=10,array[1]=Mbs Coding,array[2]=undefined,array[3]=true,array[4]=undefiend
// }
// document.write("</ul>");//

// User se value get 


// Future 3 hi values dalegi
let array = new Array(3);
// user se values get 
// index = 0 , 0th , 1st , 2nd
// index<3
for(let getValue=0; getValue<=2;getValue=getValue+1){//getValue=0,0<=2=>t,getValue=1,1<=2=>t,getValue=2,2<=2=>t,getValue=3,3<=2=>False
  // getValue = array index 
  array[getValue]=prompt("Enter the value: ");//array[0]=Mbs,array[1]=coding,array[2]=Irfan Khan Legend Actor
}
document.write("<ul>");//start
// index start = 0 , index<=2 ; index = index + 1 
for(let index = 0; index<=2 ; index = index + 1 ){//index=0,0<=2=>t,index=1,1<=2=>t,index=2,2<=2=>t,index=3,3<=2=>False
  document.write("<li>"+ array[index] + "</li>");//array[0]=Mbs,array[1]=coding,array[2]=Irfan Khan Legend Actor
}
document.write("</ul>");//End