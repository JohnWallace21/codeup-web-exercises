"use strict";

console.log('Hello from External JavaScript!');

alert("Welcome to my Website!");

 var color = prompt("What is your favorite color?")

alert(color + " is my favorite color too!")



//movies exercise
var littleMermaid = prompt("How many days did you rent The little Mermaid?") *3;

var brotherBear = prompt("How long did you rent Brother Bear?") *3;

var hercules = prompt("How long did you rent Hercules?") * 3;

var total = "$" + (littleMermaid + brotherBear + hercules);

alert( total + " is your total.")

//paycheck exercise
var google = prompt("How many hours did you work at Google?") * 400;
var amazon = prompt("How many hours did you work at Amazon?") * 380;
var facebook = prompt("How many hours did you work at Facebook?") * 350;
var totalHours = "$" + (google + amazon + facebook);

alert( totalHours + " is how much money you made this week!");


// product exercise

var items = prompt("How many items are you buying?");
var expired = prompt("Has the offer expired?");
var member = prompt("Are you a premium member?");


var enoughItems = (items <= 2);
var notExpired = (!expired);
var premiumMember = (member);

var offerValid = enoughItems && notExpired || premiumMember;

alert(offerValid + " Your offer is valid!")






















