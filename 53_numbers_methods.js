// Number()
// let a = "99";
// let num = Number(a);//99
// document.write(num);//99

// let a = "99";
// let num = Number(a);//99
// document.write(num + 10);//99 + 10 => 109 

// let a = "99";//string 
// document.write(a + 10);//9910

// let a = "99";
// let num = Number(a);//99
// document.write(num + 10);//99 + 10 => 109 

// let a = true;
// let num = Number(a);//Number(true) => 1 
// document.write(num);//1 


// let a = false;
// let num = Number(a);//Number(false) => 0
// document.write(num);//0 

// let a = "99 88";
// let num = Number(a);//Number(99 88) => NaN
// document.write(num);//NaN

// parseInt()
// let a = "99 88 77";
// let num = parseInt(a);//99
// document.write(num);//99

// let a = "10.00";
// let num = parseInt(a);//parseInt("10.00") => 10
// document.write(num);//10

// let a = "10.33";
// let num = parseInt(a);//parseInt("10.33") => 10
// document.write(num);//10

// let a = "354253454.53";
// let num = parseInt(a);//parseInt("354253454.53") =>354253454 
// document.write(num + "<br>");//354253454
// document.write(a);

// let a = "50 Years";
// let num = parseInt(a);//parseInt("50 Years") =>50
// document.write(num);//50

// let a = "050 Years";
// let num = parseInt(a); //parseInt("050 Years") => 50 
// document.write(num);//50

// Note : NaN
// let a = "he was 50";
// let num = parseInt(a);//parseInt("he was 50") =>NaN => Humko => Beginning value 
// document.write(num);//NaN

// parseFloat() => decimal / point 
// let a = "10.33";
// let num = parseFloat(a);//parseFloat("10.33") => 10.33
// document.write(num);//10.33

// let a = "10 30";
// let num = parseFloat(a);//parseFloat("10 30") => 10 
// document.write(num);//10

// let a = "10.30 Years";
// let num = parseFloat(a);//parseFloat("10.30 Years") => 10.30 
// document.write(num);//10.30 

// isFinite()
// let a = 100;
// let num = isFinite(a);//isFinite(100) => True
// document.write(num);//True

// let a = -100;
// let num = isFinite(a);//isFinite(-100) => True
// document.write(num);//true


// let a = -19.5678;
// let num = isFinite(a);//isFinite(-19.5678) => true
// document.write(num);//true

// let a = "hello";
// let num = isFinite(a);//isFinite("hello") => false
// document.write(num);//false


// let a = "123.456";
// let num = isFinite(a);//isFinite("123.456") => 123.456 => finite => true 
// document.write(num);//true

// Note : false => isFinite() => Infinity 

// let a = Infinity;
// let num = isFinite(a);//isFinite(Infinity) => False
// document.write(num);//false

// isInteger() 

// let a = 100;
// let num = Number.isInteger(a);//Number.isInteger(100) => true
// document.write(num);//true

// let a = "100";
// let num = Number.isInteger(a);//Number.isInterger("100") => False
// document.write(num);//False

// let a = 10.50;
// let num = Number.isInteger(a);//Number.isInteger(10.50) => false
// document.write(num);//false

// let a = -50;
// let num = Number.isInteger(a);//Number.isInteger(-50) => True
// document.write(num);//true

// let a = 10 - 5 ;
// let num = Number.isInteger(a);//Number.isInteger(10 - 5 = 5) => true
// document.write(num);//true

// let a = 10.50 - 5 ;//5.50 
// let num = Number.isInteger(a);//Number.isInteger(5.50) => false 
// document.write(num);//false

// let a = false ; 
// let num = Number.isInteger(a);//Number.isInteger(false) => false 
// document.write(num);//false

// isFinite()
// let a = false;
// let num = Number.isFinite(a);//Number.isFinite(false) => false
// document.write(num);//false


// toFixed() => 2 , 3 
// let a = 5.56789;
// let num = a.toFixed(2);//5.56 => 5.57 
// document.write(num)//5.57

// let a = 5.56789;
// let num = a.toFixed(3);//5.567 => 5.568
// document.write(num);//5.568

// toPrecision() => Round off 
// let a = 5.56789;
// let num = a.toPrecision(2);//5.56 => 5.6
// document.write(num);//5.6

// let a = 5.56789;
// let num = a.toPrecision(3);//5.567 => 5.57
// document.write(num);//5.57

// let a = 5.36789;
// let num = a.toPrecision(2);//5.36 =>5.4 
// document.write(num);//5.4

let a = 5.36789;
let num = a.toPrecision(10);//5.367890000
document.write(num);
