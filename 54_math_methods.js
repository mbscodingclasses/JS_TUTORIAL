// Math Methods 
// ceil() => upward value 
// Note : ceil() , floor() => work => number => value => float / decimal / point 

// upper value => nearest integer 
// 5.2 => 6 
// let a = Math.ceil(5.2);//5.2 => nearest upper integer => 6 
// document.write(a);//6

// let a = Math.ceil(1.2);//1.2 => nearest upper integer => 2 
// document.write(a);//2

// let a = Math.ceil(1.45);//1.45 => nearest upper integer => 2 
// document.write(a);//2

// Note : Negative value => nearest upper integer 
// let a = Math.ceil(-2.35);//-2 
// document.write(a);//-2

// let a = Math.ceil(-4.6879);//-4 
// document.write(a);//-4

// let a = Math.ceil(-44.6879);//-44 
// document.write(a);//-44

// ceil Trick : 
/*
+ve 
ex.1 => 3.4567 => 3 + 1 => 4 

ex.2 => 5.67 => 5 + 1 => 6 

ex.3 => 56.764321 => 56 + 1 => 57 

*/ 

/*
-ve 

ex.1 => -4.35 =>  -4

ex.2 => -2.35 => -2

ex.3 => -43.6789234 => -43
*/


// floor() => downward value 
/*
+ve 

4.5 => 4 

6.7 => 6 

8.9 => 8 

2.67 => 2 
*/ 

/*
-ve 

-3.4 => -4 

-5.6 => -6 

-7.8 => -8 
*/
// let a = Math.floor(1.34);//1
// document.write(a);

// let a = Math.floor(2.34);//2
// document.write(a);

// let a = Math.floor(8.34);//8
// document.write(a);

// let a = Math.floor(14.34);//14
// document.write(a);

// let a = Math.floor(-1.34);//-2
// document.write(a);

// let a = Math.floor(-9.34);//-10
// document.write(a);

// let a = Math.floor(-8.34);//-9
// document.write(a);

// let a = Math.floor(-456.34);//-457
// document.write(a);

// let a = Math.floor(0.60);//DNI => 0
// document.write(a);//0

// let a = Math.floor(-0.60);//DNI =>-1 
// document.write(a);//-1

// -0.56 => -1 

// +0.56 => 0 

// round() 
// upper nearest integer 

// Note : 
/*
1 .5 ya 5 se badi value => upper => nearest integer  
*/
// let a = Math.round(0.60); // 1 
// document.write(a); // 1 

// let a = Math.round(2.60);//3 
// document.write(a);//3

// let a = Math.round(2.50);//3 
// document.write(a);//3

/*
2 . 5 Ya 5 Se Choti value => Niche wale nearest integer / doward nearest integer 
*/
// let a = Math.round(2.49);//2 
// document.write(a);//2

/*

*/ 

// let a = Math.round(3.44 );
// document.write(a);//3

// let a = Math.round(9.234);//9
// document.write(a);//9

// let a = Math.round(7.6348);
// document.write(a);//8

// 5 se bada => upper nearest integer 

// 5 se chota => downward nearest integer 

// trunc() => point / decimal => remove 

// let a = Math.trunc(8.19);//8
// document.write(a);//8


// let a = Math.trunc(12.456789);//12
// document.write(a);//12

// Note : 
/*
1 . round 

5.34 => 5 => downward nearest integer 

5.78 => 6 => uppermost nearest integer 

2 . trunc => decimal / point => ke baad values => remove 

1.23456789 => 1

2.3456 => 2
*/

// max() => highest value 
// let a = Math.max(8,10,12,2,50,25);//highest value = 50 
// document.write(a);//50

// let a = Math.max(-10,-2);
// document.write(a);//-10,-2 =>Highest value => -2 

// let a = Math.max(-345,-456);//-345 => hv
// document.write(a);//-345

// min() => lowest value 
// let a = Math.min(8,10,2,50,25);//lowest value = 2 
// document.write(a);//2

// let a = Math.min(-2,-4);//lowest value => -4 => -ve 0 se dur => lowest
// document.write(a);//-4

// sqrt()

// let a = Math.sqrt(25);//5 * 5 => 25
// document.write(a);//5 

// let a = Math.sqrt(36);// 6 * 6 = 36 
// document.write(a);//6

// let a = Math.sqrt(81);// 9 * 9 => 81 
// document.write(a);//9

// cbrt() 
// let a = Math.cbrt(125);//5 * 5 * 5 => 125
// document.write(a);//5

// let a = Math.cbrt(27);//3 * 3 * 3 => 27 
// document.write(a);//3

// let a = Math.cbrt(8);//2 * 2 * 2 => 8 
// document.write(a);//2

// let a = Math.cbrt(64);//4 * 4 * 4 => 64
// document.write(a);//4


// pow() => power
// pow(x,y) => x base , y exponent 
//  base exponent 

// pow(x,y) => x ki power y 

// let a = Math.pow(2,3);//2 ki power 3 => 2 * 2 * 2 => 8 
// document.write(a);//8

// let a = Math.pow(3,2);//3 ki power 2 => 3 * 3 => 9 
// document.write(a);//9

// let a = Math.pow(1,100);//1 ki power 100 => 1 * 100 baar => 1
// document.write(a);//1

// let a = Math.pow(0,100000);//0 ki 100000 => 0 Ki power anything => 0
// document.write(a);//0 

// let a = Math.pow(23456,0);//23456 ki power 0 => anything ki power zero => 1 
// document.write(a);//1

// random() => random number => page refresh => click

// let a = Math.random();
// document.write(a);//0 se leke 1 tak => random values => page ke refresh

// 1 se 10 

// note : floor => downward values , random => 0 se 1 
// let a = Math.floor(Math.random()*10)+1;// 1 se 10 
// document.write(a);//

// dry run : 
// let a = Math.floor(Math.random()*10) + 1;//
// document.write(a);//0.5863075964738489 =>
  // 5.863075964738489 => downward nearest integer => 5 + 1 => 6

// let a = Math.floor(Math.random()*100) + 1;//56.789456 => downward nearest integer => 56  => 1 add => 1 se 100 
// document.write(a);

// abs()

// let a = Math.abs(5.25);
// document.write(a);//5.25

// let a = Math.abs(-5.25);
// document.write(a);//5.25

// let a = Math.abs(null);//null => abs => 0
// document.write(a);//0

// let a = Math.abs("hello");//"hello" => NaN
// document.write(a);//NaN

// let a = Math.abs(2 + 3);//5 => abs => 5
// document.write(a);//5

// PI
// let a = Math.PI;//3.141592
// document.write(a);//3.141592

// Math. => Math => Object => saare => function/methods / properties => calculation => 