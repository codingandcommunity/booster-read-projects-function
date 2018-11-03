// lambda.js
'use strict';

//Import the magical aws-serverless-express library
// This transforms AWS Lambda context objcets to express requests
const awsServerlessExpress = require('aws-serverless-express');

//Import the API implementation from app.js
const app = require('./app');

//Instantiate aws-serverless-express
const server = awsServerlessExpress.createServer(app);

//Export a handler function that processes incoming requests
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);