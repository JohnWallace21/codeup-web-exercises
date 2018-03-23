"use strict";
//1. we are always multiplying the initial number by two



var i = 2;

while (i < 65537) {
    console.log(i);
    i = i * 2 ;
}



//---------------------------------------------------------------------------------------------





// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
var conesPurchased = Math.floor(Math.random() * 5) + 1;
    if(conesPurchased > allCones) {
        console.log("whoops, you wanted " + conesPurchased + " I only have " + allCones)
    }else{
        allCones = (allCones - conesPurchased);
        console.log( "you purchased " + conesPurchased)

     }

} while(allCones > 0);

console.log("yay all the cones are gone");



//-----------------------------------------------------------------------------------------
