const express = require('express');
const app = express();

app.get('/', (req, res) => res.send({
    name: 'Hello, World',
    image_src: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/5431a80b-9ab9-486c-906a-e3d4b5ccaa96-hello-world.png',
    git_url: 'git@github.com:codingandcommunity/booster-project-hello-world.git'
}));

module.exports = app;