//I predicted correctly 14 and got 1 wrong.
function a(){
  return 35;
}
//it prints 35
// console.log(a())

function a(){
  return 4;
}
//I predicted only 8 but computer prints 4 and 8 and I understood what I missed
// console.log(a()+a());

function a(b){
  return b;
}
//I predicted 6
// console.log(a(2)+a(4));

function a(b){
  console.log(b);
  return b*3;
}
//my prediction outcome is 3 and 9
// console.log(a(3));

function a(b){
 return b*4;
 console.log(b);
}
//predicted 40 and it is correct because any line after the return value never executes.
// console.log(a(10));

function a(b){
  if(b<10) {
      return 2;
  }
  else     {
      return 4;
  }
  console.log(b);
}
//i predicted 4 because the last expression is correct function terminates
// console.log(a(15));

function a(b,c){
  return b*c;
}
//output is 10, 3 from the log outside of function and 30 which is the return value from the function
// console.log(10,3);
// console.log( a(3,10) );

function a(b){
  for(var i=0; i<10; i++){
      console.log(i);
  }
  return i;
}
//output is 3 and 4 which log from outside of the func. the func never run because we never invoke it.
// console.log(3);
// console.log(4);

function a(){
  for(var i=0; i<10; i++){
      i = i +2;
      console.log(i);
  }
}
//output 2 5 8 11
// a();

function a(b,c){
  for(var i=b; i<c; i++) {
     console.log(i);
 }
 return b*c;
}
//output 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 
// a(0,10);
// console.log(a(0,10));

function a(){
  for(var i=0; i<10; i++){
     for(var j=0; j<10; j++){
         console.log(j);
     }
     console.log(i);
  }
}
//no output because we never invoke the func


function a(){
  for(var i=0; i<10; i++){
      for(var j=0; j<10; j++){
          console.log(i,j);
      }
      console.log(j,i);
  }
}
var z = 10;
//not output func was not invoked

function a(){
  var z = 15;
  console.log(z);
}
// console.log(z);
var z = 10;
//out put is 10 from the outside log

function a(){
  var z = 15;
  console.log(z);
}
// a();
//output 15 and 10
// console.log(z);
// var z = 10;

function a(){
  var z = 15;
  console.log(z);
  return z;
}
//output 15 15
// z = a();
// console.log(z);