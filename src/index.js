//Import the router from app.js
// This gives us the API implementation so that we can run it
const app = require('./app');

//Declare the port we're listening to to be 3000
const port = 3000;

//Tell the app to accept and respond to incoming requests, then log a message to the console
app.listen(port, () => console.info(`booster-read-projects-function app listening on port ${port}!`));