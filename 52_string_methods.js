// 1 . length 
// let str = "Mbs";
// let a = str.length;
// document.write(a);//3 

// let str = "JavaScript is a Great Language";
// let a = str.length;
// document.write(a);//30

// 2 . toLowerCase()
// let str = "JAVASCRIPT IS A GREAT PROGRAMMING LANGUAGE";
// document.write(str + "<br>"+"<br>");
// let a = str.toLowerCase();
// document.write(a);

// 3 . toUpperCase()
// let str = "javascript is a great programming language";
// let a = str.toUpperCase();
// document.write(a);

// 4 . includes()
// let str = "JavaScript is a GREAT Language";
// // let a = str.includes("is");
// // let a = str.includes("a");
// // let a = str.includes("IS");//false => case sensative => exat match 
// // let a = str.includes("issght");//false 
// // let a = str.includes("ipt");//true
// let a = str.includes("i");//true
// document.write(a);

// startWith() 
// let str = "JavaScript is a Great Language";
// // let a = str.startsWith("J");
// // let a = str.startsWith("Java");
// // let a = str.startsWith("JavaScript");
// // let a = str.startsWith("Javascript");
// // let a = str.startsWith("JAVA");
// document.write(a);


// endsWith()

// let str = "JavaScript is a Great Language";
// // let a = str.endsWith('Language');
// let a = str.endsWith('uage');
// document.write(a);


// Note : startWith() => exat match => start
// Note : endsWith() => exat match => last 

// let str = "Javascript";
// let a = str.startsWith("Jav");
// document.write(a);//true

// let str = "JavaScript";
// let a = str.endsWith("ript");
// document.write(a);

// search()
// let str = "JavaScript is a GREAT Language";
// let a = str.search("is");//11 => i
// document.write(a);//11

// let str = "JavaScript is a GREAT Language";
// let a = str.search("GREAT");//16
// document.write(a);//16

// let str = "JavaScript is a GREAT Language";
// let a = str.search("GREat");//-1
// document.write(a);//-1

// Note : search() => position => exat match 


// let str = "JavaScript is a GREAT Language";
// let a = str.search("wrfuiwrif");//-1
// document.write(a);//-1

// match()
// let str = "JavaScript is a GREAT is Language";
// let a = str.match(/is/g);//[is,is]
// document.write(a);

// indexOf() 
// let str = "JavaScript is a GREAT is Language";
// let a = str.indexOf("is");//11
// document.write(a);//11

// lastIndexOf() 
// let str = "JavaScript is a GREAT is Language";
// let a = str.lastIndexOf("is");//22
// document.write(a);//22

// replace()
// let str = "JavaScript is a GREAT is Language";
// let a = str.replace("JavaScript","PHP");
// document.write(a);

// let str = "JavaScript is a GREAT is Language";
// let a = str.replace("is","are");
// document.write(a);

// let str = "JavaScript is a GREAT is Language";
// let a = str.replace(/is/g,"are");
// document.write(a);

// trim() => max => use => form => input box => spces chut => trim => spaces hata dega 

// let str = "    JavaScript  ";
// let a = str.trim();
// alert(a);

// alert(str);

// charAt()
// let str = "JavaScript is a GREAT is Language";
// let a = str.charAt(3);//a
// document.write(a);

// let str = "JavaScript is a GREAT is Language";
// let a = str.charAt(0);//J
// document.write(a);//J

// let str = "JavaScript is a GREAT is Language";
// let a = str.charAt(300);
// document.write(a);//blank

// charCodeAt()
// Note : 
/*
  A = 65 
  Z = 90 
  a = 97 
  z = 122
*/
// let str = "abc ABC AaBb ZzXxYy";
// let a = str.charCodeAt(0);//a = 97
// document.write(a);

// let str = "abc ABC AaBb ZzXxYy";
// let a = str.charCodeAt(1);//b = 98
// document.write(a);

// let str = "abc ABC AaBb ZzXxYy";
// let a = str.charCodeAt(4);//A=65
// document.write(a);

// let str = "abc ABC AaBb ZzXxYy";
// let a = str.charCodeAt(5);//B=66
// document.write(a);

// let str = "ZzXxYy";
// let a = str.charCodeAt(0);//Z=90
// document.write(a);

// let str = "ZzXxYy";
// let a = str.charCodeAt(1);//z=122
// document.write(a);

// fromCharCode() => keyboard => 
  /*
A = 65 
Z = 90
a = 97 
z = 122
*/

// let a = String.fromCharCode(65);
// document.write(a + "<br>") ; //A
// let b = String.fromCharCode(90);
// document.write(b + "<br>") //Z
// let c = String.fromCharCode(97);
// document.write(c + "<br>") ;//a
// let d = String.fromCharCode(122);
// document.write(d + "<br>") ; //z


// concat()
// let str1 =  "JavaScript is a great Language ";
// let str2 = "Mbs ";
// let str3 = "Coding"
// let a = str1.concat(str2,str3);//JavaScript is a great Language Mbs Coding
// document.write(a);

// split()
// let str = "Mbs Coding Educational Channnel";
// let a = str.split(" ");//[Mbs,Coding, Educational,Channel]
// document.write(a);


// let str = "Mbs Coding Educational Channnel";
// let a = str.split("a");//[Mbs Coding Educ,tion,l Ch,nnnel]
// document.write(a);


// repeat() 
// let str = "JavaScript is a great Language ";
// let a = str.repeat(2);
// document.write(a);

// slice()
// let str = "JavaScript is a great Language ";
// let a = str.slice(3);//aScript is a great Language
// document.write(a);

// let str = "JavaScript is a great Language ";
// let a = str.slice(3,10);//aScript 
// document.write(a);

// let str = "JavaScript is a great Language ";
// let a = str.slice(0);//JavaScript is a great Language
// document.write(a);

// let str = "JavaScript is a great Language";
// // let a = str.slice(-1);//e
// // let a = str.slice(-2);//ge
// let a = str.slice(-5);//guage
// document.write(a);

// substr() , substring()
// let str = "JavaScript is a great Language";
// let a = str.substring(2);//vaScript is a great Language
// document.write(a);

// let str = "JavaScript is a great Language";
// let a = str.substr(2);//vaScript is a great Language
// document.write(a);

// let str = "JavaScript is a great Language";
// let a = str.substr(2,5);
// // Jav  vascr => vascr 
// document.write(a);//vascr

// let str = "JavaScript is a great Language";
// let a = str.substr(3,5);//aScri
// // Java , aScri
// document.write(a);//aScri

// substring() => slice 
// let str =  "JavaScript is a great Language";
// let a = str.substring(3,5);//aS 
// // Jav => output = aS  => nahi c
// document.write(a);//aS

// let str = "JavaScript is a great Language";
// let a = str.substring(3,7);//3 se start but 7 tak chalo but  7 ko include mat karo
// document.write(a);//aScr  
// Java => Output => aScr  =>  Nahi => i

// toString()
// let str = 50; //number 
// let a = str.toString();//'50'
// document.write(a + 20); //5020
// document.write(str + 20); // 50 + 20 => 70

// valueOf()
let str =  "JavaScript is a great Language";
let a = str.valueOf();//JavaScript is a great Language
document.write(a);//value => print 