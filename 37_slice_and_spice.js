// Slice & Spice 

// 1 . Slice() 

// let a = ["Sita","Aman","Ram","Rahul","KK"];
// document.write(a + "<br><br>");
// // index => 0 => sita , 1 => aman , 2 => ram , 3 => rahul , 4 => kk
// let b = a.slice(1 , 4);//start = 1  , end =  4 ,(< 4)
// document.write(b + "<br><br>");

// let a = ["Sita","Aman","Ram","Rahul","KK"];
// document.write(a + "<br><br>");
// // index => 0 => sita , 1 => aman , 2 => ram , 3 => rahul , 4 => kk
// let b = a.slice(1);//start = 1  , end = kuch nahi daala
// document.write(b + "<br><br>");

// let a = ["Sita","Aman","Ram","Rahul","KK"];
// document.write(a + "<br><br>");
// // index => 0 => sita , 1 => aman , 2 => ram , 3 => rahul , 4 => kk
// let b = a.slice(2);//start = 1  , end =  
// document.write(b + "<br><br>");

// let a = ["Sita","Aman","Ram","Rahul","KK"];
// document.write(a + "<br><br>");
// // kk => -1 , rahul = -2 , ram = -3 , aman = -4 , sita = -5 
// let b = a.slice(-2);//start = -2  , end =  
// document.write(b + "<br><br>");

// let a = ["Sita","Aman","Ram","Rahul","KK"];
// document.write(a + "<br><br>");
// // kk => -1 , rahul = -2 , ram = -3 , aman = -4 , sita = -5 
// // Sita => -5 ,Aman => -4 ,Ram => -3 ,Rahul => -2 ,KK => -1 
// let b = a.slice(-3 , -1);//start = -3 , end =   -1
// document.write(b + "<br><br>");


// let a = ["Sita","Aman","Ram","Rahul","KK"];
// document.write(a + "<br><br>");
// // kk => -1 , rahul = -2 , ram = -3 , aman = -4 , sita = -5 
// // Sita => -5 ,Aman => -4 ,Ram => -3 ,Rahul => -2 ,KK => -1 
// let b = a.slice(-5 , -1);//start = -5 , end =   -1
// document.write(b + "<br><br>");

// Splice()
// Note : exsting array => change => splice => new array => nahi banata 

// let a = ["Sita","Aman","Ram","Rahul"];
// document.write(a + "<br><br>");
// // 0 => sita , 1 => aman , 2 => ram , 3 => rahul
// // 2 => index => ram => aage saraka dega => 0  
// a.splice(2,0,"Navdeep","KK");//index = 2 ( 2 se just pahle) , 0 ( aage saraka do but delete mat karo) , new values 
// document.write(a + "<br><br>");


// let a = ["Sita","Aman","Ram","Rahul"];
// document.write(a + "<br><br>");
// // 0 => sita , 1 => aman , 2 => ram , 3 => rahul
// // 2 => index => ram => aage saraka dega => 0  
// a.splice(2,1,"Navdeep","KK");//index = 2 ( 2 se just pahle) , 1 (value delete) , new values 
// document.write(a + "<br><br>");


// let a = ["Sita","Aman","Ram","Rahul"];
// document.write(a + "<br><br>");
// // 0 => sita , 1 => aman , 2 => ram , 3 => rahul
// // 2 => index => ram => aage saraka dega => 0  
// a.splice(2,2,"Navdeep","KK");//index = 2 ( 2 se just pahle) , 2 => (2 value delete) , new values 
// document.write(a + "<br><br>");


// let a = ["Sita","Aman","Ram","Rahul"];
// document.write(a + "<br><br>");
// // Rahul => -1 , Ram => -2 , Aman => -3 , Sita => -4 
// a.splice(-2,1,"Navdeep","KK");//start = index => -2 , 1 => (value delete) , new values add
// document.write(a + "<br><br>");


// let a = ["Sita","Aman","Ram","Rahul"];
// document.write(a + "<br><br>");
// // Rahul => -1 , Ram => -2 , Aman => -3 , Sita => -4 
// a.splice(-2,2,"Navdeep","KK");//start = index => -2 , 2 => (values delete) , new values add
// document.write(a + "<br><br>");


// let a = ["Sita","Aman","Ram","Rahul"];
// document.write(a + "<br><br>");
// // Rahul => -1 , Ram => -2 , Aman => -3 , Sita => -4 
// a.splice(2,2);//start = index => 2 , 2 => (values delete)
// document.write(a + "<br><br>");

// Note :  Splice => exsting array => new values add / values delete => new array nahi nahi banata yah existing array => kaam

// Note : Slice =>existing array => values => nikalkar => new array 