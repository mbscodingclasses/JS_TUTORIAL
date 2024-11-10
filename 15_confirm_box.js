// Confirm box => alert box => jaise => but => question => do you like our website => yes / no 

// ok => true 
// cancel => false 

// confirm("Do you like our Website?");

// let a = confirm("Do you like Our Website?");
// alert(a);// ok => t , cancel =>f

let a = confirm("Do you like Our Website?");
if(a){//true => ok 
  alert("Thanks");
}
else{//cancel => false
alert("Sorry");
}

// Note : confirm box => page ke refresh ke ooper nahi lagate => event ke saath use => button => click => confirm , band karne lage => website => tab => confirm box 