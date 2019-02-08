//Import the ExpressJS library
const express = require('express');
var bodyParser = require('body-parser')
var https = require('https');

//Instantiate an ExpressJS router
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


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

//Add a POST route for /auth
app.post('/auth', (req, res) => {
    const query = '?client_id=f555dad5426dd631182f&client_secret=c81204aa60ecfa6242e6aacdbb1616e9402c00e9&code=' + req.body.code;

    var options = {
        host: 'github.com',
        path: '/login/oauth/access_token' + query, 
        method: 'POST'
    };

    // Make a request to Github API to validate code. If successful, an API token
    // is returned.
    var github_req = https.request(options, (github_res) => {
        github_res.setEncoding('utf8');
        github_res.on('data', (chunk) => {
            var access_token = chunk.match(/access_token=([^&]*)/)[1];
            res.send({
                token: access_token, 
            });
        });
        github_res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    github_req.end();
});

//Export the express module so that either the index.js file or lambda.js file
// can use the same router
module.exports = app;
