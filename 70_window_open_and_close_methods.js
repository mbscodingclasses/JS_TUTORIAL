// function openWindow(){
//   window.open();
// }

// function openWindow(){
//   window.open("https://www.google.com")
// }

// function openWindow(){
//   window.open("https://www.google.com" , "Google Real Page");
// }

// function openWindow(){
//   window.open("https://www.google.com",'_blank');
// }

// function openWindow(){
//   window.open("https://www.google.com",'_parent');
// }

// note : iframe => ek page => open => _self use 

// function openWindow(){
//   window.open("https://www.google.com",'_self');
// }

// function openWindow(){
//   window.open("https://www.google.com","", 'width=500px , height=200px');
// }


// function openWindow(){
//   window.open("https://www.google.com","", 'width=500px , height=200px , left=100px , top=200px');
// }

// let myWindow ; 

// function openWindow(){
//  myWindow = window.open("https://www.google.com","", 'width=500px , height=200px , left=500px , top=200px');
// }

// function closeWindow(){
// myWindow.close();
// }

// let myWindow ; 

// function openWindow(){
//  myWindow = window.open("","", 'width=500px , height=200px');//t = 0 , l = 0

//  myWindow.document.write("<p>This is MyWindow !</p>")
// }
// function moveWindow(){
//   myWindow.moveTo(100,100);//left 100px top 100px  
//   myWindow.focus();
// }


// let myWindow ; 

// function openWindow(){
//  myWindow = window.open("","", 'width=500px , height=200px , left=100px , top=100px ');

//  myWindow.document.write("<p>This is MyWindow !</p>")
// }
// function moveWindow(){
//   myWindow.moveTo(200,200);//left 200px top 200px  
//   myWindow.focus();
// }


// let myWindow ; 

// function openWindow(){
//  myWindow = window.open("","", 'width=500px , height=200px , left=100px , top=100px ');

//  myWindow.document.write("<p>This is MyWindow !</p>")
// }
// function moveWindow(){
//   myWindow.moveBy(200,200);//Relatively => eft 200px top 200px  
//   myWindow.focus();
// }

// Note : 

// moveBy => relative pos work

// moveTo => absolute pos work 


// let myWindow ; 

// function openWindow(){
//  myWindow = window.open("","", 'width=200px , height=200px , left=100px , top=100px ');

//  myWindow.document.write("<p>This is MyWindow !</p>")
// }

// function resizeWindow(){
// myWindow.resizeTo(400,400);// width 400, height 400
// }


let myWindow ; 

function openWindow(){
 myWindow = window.open("","", 'width=200px , height=200px , left=100px , top=100px ');

 myWindow.document.write("<p>This is MyWindow !</p>")
}

function resizeWindow(){
myWindow.resizeBy(400,400);// w = 200 + 400 => 600 , h = 600
}