// setInterval(AnimationReal,1000);//1000ms = 1s

// function AnimationReal(){
//   console.log("Hello");
//   //1s Hello 
//   // 2s Hello
//   // 3s Hello 
//   // 4s Hello
// }

// let a = 0 ; 

// setInterval(AnimationReal,1000);//1000ms = 1s

// function AnimationReal(){

//   a = a + 10 ; // a = 0 , 1s => a = 10 , 2s => a = 20 , 3s => a = 30 , 4s => a = 40 

//   console.log(a);
// }

// let a = 0;

// setInterval(AnimationReal,1000);//1000ms = 1s

// function AnimationReal(){

//   a = a + 10 ; //a=10 , a = 20 

//   let target = document.getElementById("test");// div 

// target.style.marginLeft = a + 'px' ;  // 10px , 20px
// }


// let a = 0;

// setInterval(AnimationReal,500);//500ms = half sec

// function AnimationReal(){

//   a = a + 10 ; //a=10 , a = 20 

//   let target = document.getElementById("test");// div 

// target.style.marginLeft = a + 'px' ;  // 10px , 20px
// }


// let a = 0;

// setInterval(AnimationReal,100);//100ms = 100 millisec

// function AnimationReal(){

//   a = a + 10 ; //a=10 , a = 20 

//   let target = document.getElementById("test");// div 

// target.style.marginLeft = a + 'px' ;  // 10px , 20px
// }

// let a = 0 ; 

// let id = setInterval(AnimationReal,500);//

// function AnimationReal(){

//   a = a + 10;//a = 10 , a = 20 , a = 30 , a = 40 , ..... , a = 200 

//   if(a == 200){// 10 == 200 => f , 20 == 200 => f , a = 200 , 200 == 200 => true 
//     clearInterval(id); // stop => a = 200
//   }
//   else{
//     let target = document.getElementById("test") ;  //div 

//   target.style.marginLeft = a + "px" ; //10px => right => move , 20px => right => move
//   }
// }


// let a = 0 ; 

// let id = setInterval(AnimationReal,500);//

// function AnimationReal(){

//   a = a + 10;//a = 10 , a = 20 , a = 30 , a = 40 , ..... , a = 200 

//   if(a == 200){// 10 == 200 => f , 20 == 200 => f , a = 200 , 200 == 200 => true 
//     clearInterval(id); // stop => a = 200
//   }
//   else{
//     let target = document.getElementById("test") ;  //div 

//   target.style.width = a + "px" ; //10px => right => move , 20px => right => move
//   }
// }


let a = 0 ; 

let id = setInterval(AnimationReal,500);//

function AnimationReal(){

  a = a + 10;//a = 10 , a = 20 , a = 30 , a = 40 , ..... , a = 200 

  if(a == 200){// 10 == 200 => f , 20 == 200 => f , a = 200 , 200 == 200 => true 
    clearInterval(id); // stop => a = 200
  }
  else{
    let target = document.getElementById("test") ;  //div 

  target.style.height = a + "px" ; //10px => right => move , 20px => right => move
  }
}