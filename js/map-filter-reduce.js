const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


const langs = users
     // .map(user => user.languages)
    .filter(user => user.languages.length > 2)
;
console.log(langs);


const emails = users.map (user => user.email)
;

console.log(emails);




const arrayToObject = (array) =>
    users.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {});

// const arrayToObject = (array, keyField) =>
//     users.reduce((obj, item) => {
//         obj[item[keyField]] = item
//         return obj
//     }, {});

console.log(arrayToObject());








// const threeLangs = [];
// for (const language of languages){
//     if (language.length > 3){
//         threeLangs.push(language);
//     }
// }
//
// const knowsjs = [];
//
// for(const language of languages) {
//     if (language)
// }


// const name = users.map(user => user.name);

// const langs = users
//     .filter(user => user.languages)
//     .filter(languages => languages[3]);
// console.log(langs);


    // = users.filters( => languages.length >= 3);

// const emailArray = users.map(=> users.email[""]);
// console.log(emailArray);
//
//
// const