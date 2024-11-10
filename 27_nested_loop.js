// Nested Loop
// Tabulaur => format => data => dikhayenge => 1 se 100 counting 
// 1 se 10  => 1 row
// 11 se 20 => 2nd row 
// 21 se 30 => 3rd row 
// Loop => outer loop
// Inner loop
// 1 se 100 counting
// 10 10 se increment 

// Outer loop => Rows => Horizontal => 1 11 21 31 
// for(let a = 1; a <= 100; a = a + 10){
// // Outer Loop Check
// document.write(a + "<br>");
// }


// Outer Loop => rows value
for(let a = 1; a <= 100; a = a + 10){
  //a=1,1<=100=>t , a = 11 , 11<=100=>True
//  Inner Loop => column value
for(let b = a; b < a+10;b=b+1){//a=1,b=1,b<a+10=>1<1+10=>1<11=>true,b=2,b<11=>2<11=>t,b=3,3<11=>true,b=4,4<11=>true,b=5,5<11=>true,b=6,6<11=>True,b=7,7<11=>true,b=8,8<11=>true,b=9,9<11=>true,b=10,10<11=>true,b=11,b<a+10=>11<11=>False
  // a=11,b=11,b<a+10=>11<11+10=>11<21=>True,b=11+1=12=>b=12,b<a+10=>12<11+10=>12<21=>True,b=13,13<21=>True,b=14,14<21=>True,b=15,15<21=>True,b=16,16<21=>True,b=17,17<21=>True,b=18,18<21=>True,b=19,19<21=>True,b=20,20<21=>True,b=21,21<21=>False => Out of loop
  document.write(b + " ");
  //1 2 3 4 5 6 7 8 9 10  
  //11 12 13 14 15 16 17 18 19 20
}
document.write("<br>");//New Line 1 , New Line 2
  }