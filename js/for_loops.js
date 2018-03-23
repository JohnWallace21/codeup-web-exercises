"use strict";

function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++)
        console.log( number +"x" + i + "=" + (number * i));
}


console.log(showMultiplicationTable(3));


//---------------------------------------------------------------------
 for (var i = 100; i >= 5; i = i - 5) {
     console.log(i);
 }
 //---------------------------------------------------



//-----------------------------------------------------------

function randomInt( start, end){
     return Math.floor(Math.random() * (end - start)) + start;
}

function isEven(x) {
     return x % 2 === 0;
}
function isOdd(x) {
     return x % 2 === 1;
}


var number;
 for (var i = 1; i <= 10; i++) {
     number = randomint(20, 200);

     if(isEven(number)) {
         console.log(number + " is even");

     }
 }

