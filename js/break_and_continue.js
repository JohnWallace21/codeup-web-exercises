"use strict";

function isOdd(x) {
    return x % 2 === 1;
}
var number;

do{
  number =  parseFloat(prompt("enter an odd number between 1 and 50"));
  if(isOdd(number)){
      break;
  }
}while(true);

console.log(number);

//=================================================================================


for( var i = 1; i <= 50; i++) {

    if(i === number) {
        console.log("yikes skipping number " + i)
        continue;
    }
    if (isOdd(i)) {
        console.log( "here is an odd number " + i);
    }
}
