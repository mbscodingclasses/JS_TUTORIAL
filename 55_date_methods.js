// Date methods 

// let now = new Date();//date object
// document.write(now);//Sun Nov 03 2024 10:09:33 GMT+0530 (India Standard Time)

// JS => load => chali 

// Note : time => system se => server se nahi uthata time ko

// JavaScript => client side scripting language => system / brouser => load baad me jaake run

// let now = new Date();//date object
// document.write(now);//now => obj => date => obj


// 1.  toDateString() => readble format 
// let now = new Date();//date object
// document.write(now.toDateString());//Sun Nov 03 2024
//now object => Readable format 
// Sun Nov 03 2024 10:09:33 GMT+0530 (India Standard Time) => Non Readble Format 

// 2 . getDate() 
// let now = new Date();
// document.write(now.getDate());//3

// let now = new Date();
// document.write(now.getFullYear());//2024


// getMonth() => Month 
// Note : 0 => Jan , 1 => Feb , 2 => march , 3 => april , 4 => may , 5 => june , 6 => july , 7 => august , 8 => sept , 9 =. octo , 10 => nov , 11 => dec  
// let now = new Date();
// document.write(now.getMonth());//Nov => 10

// getDay() => day 
// 0 => sunday , 1 => mon , 2 => tue , 3 => wed , 4 => thur , 5 => frid => 6 => sat 

// let now = new Date();
// document.write(now.getDay());//Sunday => 0

// History => pre / date / month 

// let now = new Date('January 5 2010');
// document.write(now.getDay());//2 =>  Tuesday

// let now = new Date('January 5 2010');
// document.write(now.getMonth());//Jan = 0

// let now = new Date('January 5 2010');
// document.write(now.getFullYear());//2010

// getHours() 
// 12 =>0 , 1 => 1 , 10:47 => 10 Hours 
// let now = new Date();
// document.write(now.getHours());//10 Hours

// getMinutes() 

// let now = new Date();
// document.write(now.getMinutes());//10:52=> 52 Minutes

// getSeconds() 

// let now = new Date();
// document.write(now.getSeconds());//seconds

// getMilliSeconds()

// let now = new Date();
// document.write(now.getMilliseconds());//milliseconds

// let now = new Date('January 5 2010');
// document.write(now.getHours());//0 => 12 am => initially 

// let now = new Date('January 5 2010');
// document.write(now.getMinutes());//0

// let now = new Date('January 5 2010');
// document.write(now.getSeconds());//0

// Note : History date => past => time => hours => 0 , minutes => 0, sec => 0 => initially 

// setDate() 
// let now = new Date();
// now.setDate(20);//abhi date => 3 , new date => 20
// document.write(now);//Wed Nov 20 2024 11:12:06 GMT+0530 (India Standard Time)

// let now = new Date();
// now.setFullYear(2025);
// document.write(now);

// let now = new Date();
// now.setFullYear(2025);
// document.write(now.getMonth());//Mon Nov 03 2025 11:19:02 GMT+0530 (India Standard Time)
// 10 => Nov 
// 0 => J , 1 => F , 2 => M , 3 => A , 4 => M , 5 => J , 6 => JU , 7 => AU , 8 => SE , 9 => AUC , 10 => NOV , 11 => Dec 

// setMonth() 
// let now = new Date();
// now.setMonth(4);//4 May 
// document.write(now);

// setHours() 
// let now = new Date();
// now.setHours(14);//14 => 2 PM
// document.write(now);

// Real life  
let now = new Date();
document.write(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear());