const express = require('express');
const app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});


app.get('/projects', (req, res) => res.send([{
    name: 'Hello, World',
    image_src: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/5431a80b-9ab9-486c-906a-e3d4b5ccaa96-hello-world.png',
    git_url: 'git@github.com:codingandcommunity/booster-project-hello-world.git'
}]));

module.exports = app;