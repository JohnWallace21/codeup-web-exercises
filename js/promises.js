

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.



function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number){
                resolve();
            } else {
                reject('fail');
            }
        }, number);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



//===============================================================================================================================================================================
// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

fetch('https://api.github.com/users/JohnWallace21/events', {headers: {'Authorization':  'token  here'}})
    .then((response) => response.json())
    .then((events) => (events[0]))
    .then((user) => user.created_at)
    .then((date) => (console.log(date)));



//
