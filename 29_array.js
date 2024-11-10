// Array :

// let ary = [10,20,30,40,50];
// document.write(ary);//10,20,30,40,50

// let ary = [10,20,30,40,50];
// // ary[0] = 10
// document.write(ary[0]);
// document.write("<br>");
// // ary[1] = 20
// document.write(ary[1]);
// document.write("<br>");
// // ary[2] = 30 
// document.write(ary[2]);
// document.write("<br>");
// // ary[3] = 40
// document.write(ary[3]);
// document.write("<br>");
// // ary[4] = 50
// document.write(ary[4]);
// document.write("<br>");

// let ary = [10,20,30,40,50];
// document.write(ary);
// array => start => 0th index 
// document.write(ary[0]);//10
// document.write(ary[4]);//50
// document.write(ary[5]);//Koi bhi value defined nahi hain

// Multiple lines => for loop 

// let array = [10,20,30,40,50];
// // for loop => start => 0th index,end => 4th index , index = index + 1
// // a = index , index start = 0 , index end = 4 , index = index + 1 
// for(let a = 0; a <= 4; a = a + 1){
//   document.write(array[a]+"<br>");
//   // 10
//   // 20
//   // 30
//   // 40
//   // 50
// }


// list => unorder list => ul => list item 
// let array = [10,20,30,40,50];
// // "<ul>"
// document.write("<ul>");
// // index => 0 , index <= 4 , index = index + 1
// for(let index = 0; index <= 4; index = index + 1){//index=0,0<=4=>t,index=1,1<=4=>t,index=2,2<=4=>t,index=3,3<=4=>t,index=4,4<=4=>t,index=5,5<=4=>False
//   document.write("<li>" + array[index] + "</li>");//array[0]=>10,array[1]=>20,array[2]=>30,array[3]=40,array[4]=50
// }
// document.write("</ul>");

// let array = [10,20,30,40,50];
// let sum = 0; 
// document.write("<ul>");//ul start
// // index start = 0 , index end = 4 , index gap = 1 => increment 
// for(let index = 0 ; index <= 4 ; index = index + 1){//index=0,0<=4=>t,index=1,1<=4=>t,index=2,2<=4=>t,index=3,3<=4=>t,index=4,4<=4=>t,index=5,5<=4 => False 
//   document.write("<li>" + array[index] + "</li>");//array[0]=>10,array[1]=>20,array[2]=>30,array[3]=>40,array[4]=50
//   sum = sum + array[index];//sum=0,sum=0+array[0]=>sum=0+10=>sum=10,sum=10+20=>sum=30,sum=30+30=>sum=60,sum=60+40=>sum=100,sum=100+50=>sum=150
// }
// document.write("</ul>");//un 
// document.write("Total Sum : " + sum);// Total Sum : 150 

// Mixed Values => Boolean , string , number , null

let array = [10,"Sachin","Sehvagh",true,null];
document.write("<ul>");//ul start
// index start = 0 , index end = 4 , index = index + 1 
// note : index <= 4 , index < 5
for(let index = 0; index<=4; index = index + 1 ){//index=0,0<=4=>t,index=1,1<=4=>t,index=2,2<=4=>t,index=3,3<=4=>t,index=4,4<=4=>t,index=5,5<=4 => False
  document.write("<li>" + array[index] + "</li>");//array[0]=10,array[1]=Sachin,array[2]=Sehvagh,array[3]=true,array[4]=null
}
document.write("</ul>");//ul close