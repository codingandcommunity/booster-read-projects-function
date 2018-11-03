//Import the ExpressJS library
const express = require('express');

//Instantiate an ExpressJS router
const app = express();

//Add an ExpressJS middleware that adds CORS headers to every response
// CORS headers allow pages that are not on the same domain as the API
// to access them. We need to explicitly allow this due to the Same-Origin
// Security policy
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

//Add a GET route for /projects that returns an array of dummy data
app.get('/projects', (req, res) => res.send([{
    name: 'Hello, World',
    image_src: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/5431a80b-9ab9-486c-906a-e3d4b5ccaa96-hello-world.png',
    git_url: 'git@github.com:codingandcommunity/booster-project-hello-world.git'
}]));

//Export the express module so that either the index.js file or lambda.js file
// can use the same router
module.exports = app;