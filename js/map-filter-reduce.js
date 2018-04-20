'use strict';

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

//Use .filter to create an array of user objects where each user object
//has at least 3 languages in the languages array.

// for (const language of languages) {
//     if (language.length > 3) {
//         moreThan3Languages.push(language)
//     }
// }

const knows3Languages = users.filter(user => user.languages.length >= 3);
console.log(knows3Languages);

//Use .map to create an array of strings where each element is a
//user's email address

const emails = users.map(user => user.email);
console.log(emails);

//Use .reduce to transform the array into an object where the object's keys
//are ids and the values are objects that represent each user

const transformArray = users.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
}, {});

console.log(transformArray);

