# StoreAPP - AIP2018

MASTER: [![Build Status](https://travis-ci.com/gta191977649/aip-project-2018-spring.svg?branch=master)](https://travis-ci.com/gta191977649/aip-project-2018-spring)

DEVELOP: [![Build Status](https://travis-ci.com/gta191977649/aip-project-2018-spring.svg?branch=develop)](https://travis-ci.com/gta191977649/aip-project-2018-spring)

Generic Auction website running on React front-end and Express back-end

## References

- `Root Directory` = `aip-project-2018-spring/`
- `Client Directory` = `aip-project-2018-spring/client/`
- `Server Directory` = `aip-project-2018-spring/server/`

## Requirements

### General Requirements

- Node 8.12+
- NPM 6.4.1+
- Mongo Server (can be self hosted or web hosted)

### Windows Requirements

You will need a bash client to run npm I recommend [git-bash](https://gitforwindows.org/)

- Open two instances of the bash clients

### Linux/Mac

- Two terminals open

### WARNING

- For windows and other operating systems you may need to have file extensions enabled. (google: `how to enable file extensions`)

## To Run

### NPM

First Terminal (Server):

- Navigate to the `Root Directory` of this project
- `npm run server:install`
- After the install is done go into the `Server Directory`
- Open the file `.env`, Change the value of SECRET to something secret (example: SECRET=S3cr3T ); Change MONGO_URL to match the mongo url of your mongo server. Once changed save the file as .env
- Navigate back to the `Root Directory`
- run `npm run server:start`
- Server will be available from `http://localhost:3000/`

Second Terminal (Client):

- Navigate to the `Root Director` of this project
- `npm run client:install`
- After install is done; Navigate to the `Client Directory`
- Open the file `.env`, If you moved your api server to another server this is where you set the location (REACT_APP_API_URL=[url goes here]);
- Once done editing the `.env` file save and close it.
- Navigate to the project's `Root Directory`
- run `npm run client:start`
- The client will now be available from `http://localhost:1337/`
