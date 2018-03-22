"use strict";


var i = 2;

while (i < 65537) {
    console.log(i);
    i = i * 2 ;
}


//---------------------------------------------------------------------------------------------

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var conesPurchased = Math.floor(Math.random() * 5) + 1;


do {
    if(conesPurchased > pizzaSlices) {
        console.log("I dont have that many!");
    }   else{
        allCones = (allCones - conesPurchased);

    }  (conesPurchased > allCones) {
        console.log("whoops, you wanted " + conesPurchased + " I only have " + allCones)
    }

} while(allCones > 0);

console.log("all the cones are gone");

//-----------------------------------------------------------------------------------------
