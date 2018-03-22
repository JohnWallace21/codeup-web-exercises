"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//-------in steps-----
//1. ask the user if they want to enter  a number
 var answer = confirm("Would you like to enter a number?");
//2. if the answer is cancel got to step 7

//3. ask the user fir a number
var userEntry = prompt("Enter your number.");
//3.1 if the input is not a number show an error message and go to 7
//4.show a message telling ifd the number is even or odd
//5. add 100 to the number and show the result
//6.show a message saying idfthe message is posituve or negative
//7. end of program





var plusHundred = parseInt(userEntry) + 100;


if (userEntry % 2 !== 0  && userEntry > 0) {
    alert("Your number is odd!");
    alert("Your number is positive.");
    alert("Your number plus 100 is..." + plusHundred);
} else if( userEntry % 2 === 0 &&  userEntry > 0) {
    alert("Your number is even!");
    alert("Your number is positive");
    alert("Your number plus 100 is..." + plusHundred);
} else if( userEntry % 2 === 0 &&  userEntry < 0) {
        alert("Your number is even!");
        alert("Your number is negative.");
        alert("Your number plus 100 is..." + plusHundred);
}   else if(userEntry % 2 !== 0 && userEntry < 0) {
    alert("Your number is odd!");
    alert("Your number is negative.");
    alert("Your number plus 100 is..." + plusHundred);
}else {
    alert("That aint a number");
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color){
    if(color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red"){
        return "apples are red";
    } else if (color === "orange") {
        return "basketballs are orange";
    } else if (color === "yellow") {
        return "rubber ducks are yellow"}
    } else if (color === "violet"){
        return "violet sounds violent";
    }  else if (color === "green"){
        return "grass is green";
    } else if (color === "indigo"){
      return "ink is indigo";
    } else {
    return "i dont know anything about " + color;
}













// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
