// Functions With Parameters : 
// function hello(fname,lname){//fname="Mbs",lname="coding"
//   document.write("Hello " + fname + " " + lname  );//Hello Mbs Coding
// }
// hello("Mbs","Coding");//Call hello function => Mbs => Arg1 , Coding => Arg2

// function hello(fname,lname){//fname="Mbs",lname=undefined
//   document.write("Hello " + fname + " " + lname  );//Hello Mbs undefined
// }
// hello("Mbs");//Call hello function => Mbs => Arg1 


// dono var value => undefined => niche se => fun call => values => koi bhi arg => value nahi aati => undefined => value => variables / parametrs 
// Parameters => variables 

// function hello(fname,lname){//fname=undefined ,lname=undefined 
//   document.write("Hello " + fname + " " + lname  );//Hello undefined undefined
// }
// hello();//Call hello function => no argument 

// function hello(fname = "Mbs",lname = "Coding"){//Default value => fname="Mbs",lname="Coding"
//   document.write("Hello " + fname + " " + lname  );//Hello Mbs Coding
// }
// hello();//fun call => arg => pass hi nahi 

// function hello(fname = "Mbs",lname = "Coding"){//Default value => fname="Mbs",lname="Coding" =>Overwrite fname="Ravindra" , lname="Jadega"
//   document.write("Hello " + fname + " " + lname  );//Hello Ravindra Jadega
// }
// hello("Ravindra","Jadega");//fun call => arg1=Ravindra , arg2=Jadeja

// function hello(fname = "Mbs",lname = "Coding"){//
//   document.write("Hello " + fname + " " + lname + "<br>"  );
//   //Hello Ravindra Jadega 
//   // Hello Ms Dhoni
// }
// hello("Ravindra","Jadega");//fun call =>a1=Ravindra,a2=Jadega
// hello("Ms","Dhoni");//fun call => a1=Ms,a2=Dhoni 

function sum(a,b){//a=20,b=30
  //-45 ,45 
  document.write(a+b+"<br>");//20+30=50
  //-45 + 45 = 0 
}
sum(20,30);//sum => fun call => arg1=20,arg2=30
sum(-45,45);