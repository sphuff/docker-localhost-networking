const fetch = require('node-fetch');

setInterval(() => {
    fetch('http://server:5000')
        .then(res => res.text())
        .then(text => console.log('Received: ', text))
        .catch(err => console.log('Failed to fetch: ', err.message));
}, 1000);
