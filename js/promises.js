'use strict';

// function wait(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, number)
//     });
// }

//class review...

const wait = milliseconds => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
        }, milliseconds);
    });
};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function getGithubUsers(input) {
    return fetch('https://api.github.com/users/'+input+'/events/public',
    {headers: {'Authorization': 'token YOUR TOKEN HERE'}})
    .then(response => response.json())
    .then(events => console.log(events.map(event => event.created_at)[0]))
}

getGithubUsers('emily-rodriguez');


//class review...

// const request = fetch('https://api.github.com/users/MontealegreLuis/events', {
//     headers: {'Authorization': 'token /*token goes here */'}
// });
//
// request
//     .then(response => response.json())
//     .then(events => console.log(events[0].created_at))
// ;
//
// request.catch(error => console.log(error));


