![rcos logo](imgs/rcos-logo-300.png)

![coding and community logo](imgs/cc-logo-700.png)

# booster-read-projects-function

This repository contains the "read projects" API for the [RCOS Open Source Curriculum Project](https://github.com/codingandcommunity/rcos-open-source-curriculum-project) project. Powered by Rensselaer Center for Open Source.

## Serverless Express

This repository uses the `aws-serverless-express` library to implement an AWS Lambda function that calls an express router that serves the API. However, this project can be tested locally as a normal express server.

## Commands

- `yarn start` starts a local express server for testing
- `yarn test` runs the mocha/chai unit tests
- `deploy:create` creates a new lambda function on AWS for this project (In theory, you won't ever need this cause I already ran it)
- `deploy:update` updates the lambda function on AWS (you'll need to run this if you make changes)

## AWS Credentials

In order to use deploy commands, you will need an AWS profile called `codingandcommunity`.

To get AWS credentials, get an IAM account in the `codingandcommunity` group. Talk to E-board to get these credentials.

To add these credentials to your environment, edit the file: `vi ~/.aws/credentials`

If you already have an account with AWS, you will probably have a default set of credentials, add the `codingandcommuity` entry below them. If not, add them to the empty file.

```
[default]
aws_access_key_id=[..................]
aws_secret_access_key=[......................................]


[codingandcommunity]
aws_access_key_id=[..................]
aws_secret_access_key=[......................................]
```