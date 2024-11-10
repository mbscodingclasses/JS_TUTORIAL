// Map in js 
// let array = [11,4,9,16];
// let b = array.map(test);//[110,40,90,160]
// document.write(b);//110,40,90,160
// function test(x){//11 , 4 , 9 , 16
// return x * 10; // 11 * 10 => 110 , 4 * 10 => 40 , 9 * 10 => 90 , 16 * 10 => 160 
// }

// let array = [
// {fname:"Mbs",lname:"Coding"},
// {fname:"Rahul",lname:"Kappor"},
// {fname:"KK",lname:"Menon"},
// ];
// let b = array.map(test);//[Mbs,Rahul,KK]
// document.write(b);//Mbs,Rahul,KK
// function test(x){
//   //{fname:"Mbs",lname:"Coding"} 
//   // {fname:"Rahul",lname:"Kappor"}
//   // {fname:"KK",lname:"Menon"}
// return x.fname; //Mbs , Rahul , KK
// }



let array = [
  {fname:"Mbs",lname:"Coding"},
  {fname:"Rahul",lname:"Kappor"},
  {fname:"KK",lname:"Menon"},
  ];
  let b = array.map(test);//[Mbs,Rahul,KK]
  document.write(b);//Mbs,Rahul,KK
  function test(x){
    //{fname:"Mbs",lname:"Coding"} 
    // {fname:"Rahul",lname:"Kappor"}
    // {fname:"KK",lname:"Menon"}
  return x.fname + " " + x.lname; //Mbs Coding , Rahul Kappor , KK Menon
  }
  