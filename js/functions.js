"use strict";


/**
 * Done:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name + "!";
}


/**
 * Done
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
 var helloMessage = sayHello("John");
console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "John";

sayHello(myName);
console.log(sayHello(myName));




// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(n){
    return (n === 2)
}

console.log(isTwo(1));






/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */



function calculateTip(tipPercentage, totalAmount){
    return (totalAmount) * (tipPercentage)
}

console.log(calculateTip(10, .20))






/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var totalAmount = prompt("What is your bill total?");

var tipPercentage = prompt("What percentage would you like to tip?");

alert("$" + calculateTip(totalAmount , tipPercentage ) + " is the correct tip amount.");


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */




function applyDiscount(price, discountPercent){

    return (price) * (discountPercent)

}

console.log(applyDiscount(45.99, 0.12));



//extra function drills

function identity(x){

    return (x)

}
//----------------------
function isOdd(theNumber){
return    (theNumber % 2 ===1)
}


console.log(isOdd(5));

//----------------------

function isEven(theNumber){
    return (theNumber % 2 === 0)
}

console.log(isEven(56));

//--------------------------

function isPositive(theNumber){
    return (theNumber > 0)
}

console.log(isPositive(0));

//---------------------------------

function decrement(theNumber){
    return (theNumber - 1)
}

console.log(decrement(3));

//---------------------------------------

function isFive(theNumber){
    return(theNumber === 5)
}

console.log(isFive(5));

//------------------------------------------

function square(theNumber){
    return(theNumber * theNumber)
}


console.log(square(2));
//-------------------------------------------------

function cube(theNumber){
    return(theNumber * theNumber * theNumber)
}

console.log(cube(2));

//------------------------------------------------

function half(theNumber){
    return(theNumber / 2)
}

console.log(half(6));

//----------------------------------------------------

function double(theNumber){
    return(theNumber * 2)
}


console.log(double(50));



//---------------------------------------------------------------

function isRightTriangle(a, b, c){
    return (a * a) + (b * b) === (c * c)
}


console.log(isRightTriangle(3, 4, 5));

//-------------------------

function hasSpaces(theString) {
    return theString.indexOf(" ") !== -1
}
    console.log(hasSpaces(" rdscc "));


//---------------------------------

function isValidPassword(theString){
    return theString.indexOf(" ")
}
















