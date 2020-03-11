// Requires the express dependency
const express = require('express');

// Instantiate it
const app = express();

// Create a get endpoint on the application root
// so when we start our container, the message hi there
// will be available on container initialization
app.get('/', (req, res) => {
    res.send('Hi there');
});

// Define the listening port as 8080
app.listen(8080, () => {
    console.log('Listening on port 8080')
});