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
### Notice
- Before you run this project, please make sure you have **Mongo DB installed** on your environment, for the detail intructions to install Mongo DB, please refer to [Mongo's Official Site](https://docs.mongodb.com/manual/installation/).
### NPM

### Server Part:

- Navigate to the `Root Directory` of this project
- open termial and enter `npm run server:install`
- After the install is done, go into the `server directory` located in your project root
- Open the file `.env`, Change the value of SECRET to something secret (example: SECRET=S3cr3T ); Change MONGO_URL to match the mongo url of your mongo server. Once changed save the file as .env
- Navigate back to the `Root Directory`
- open termial again and enter `npm run server:start`
- Server will be available from `http://localhost:3000/`

### Client Part:

- Navigate to the `Root Director` of this project
- `npm run client:install`
- After install is done; Navigate to the `Client Directory`
- Open the file `.env`, If you moved your api server to another server this is where you set the location (REACT_APP_API_URL=[url goes here]);
- Once done editing the `.env` file save and close it.
- Navigate to the project's `Root Directory`
- run `npm run client:start`
- The client will now be available from `http://localhost:1337/`
## Env files
### Server .env file
- `NODE_ENV` this refer to the node environment, default is `environment`
- `PORT` the port of server will be listing to, default is `3000`
- `MONGO_URL` this refer to the address of where your mongo db server are runing at, please change it according to your enviroment.
- `SECRET` the secret key which will be used to encrypt for the jwt
### Client .env file
- `PORT` the port which the client will be listing to, default is `1337`
- `REACT_APP_API_URL` the rest api server address, default is `http://localhost:3000/api` which is runing in your local machine, if you wish to deploy, you may need to change it according to your server domain.
- `REACT_APP_NAME` the application name, by default is `AIP Auctions`, you may need to change it according to your needs.

## Folder structures
### Server 
* `uploads` - the folder stores the image that are uploaded from client.
* `server`
    * `authentication` - authentication ralated code
    * `config` - the application config, e.g. types of  categories, default data migration for the mongo db.
    * `controllers` - the controllers that handles business logic, e.g. the request & response for the rest api.
    * `models` - the models of in the application, e.g. the user, product.
    * `routes` - this define the routes of each rest api endpoint.
    * `setup` - the initial setup will be runing, e.g. create the db default tables.
    * `utils` - here is where utilities & helper function are.
    * `validation` - validation for the rest request, e.g the username, search key words ,etc.
* `node_modules` - you will have it once you typed `npm install`, you will have this folder, this folder contains all the node js dependency that you need to run this project. **do not create this folder manually.** 
### Client
* `public` - where all the static html and images will be stored.
* `src` - the source folder for the react.
    * `Actions` - where the redux actions are stored. each actions were responsible for the particular rest api request of each functions.
    * `Components` - where the react compoments are stored.
    * `Reducers` - where the redux reducers are stored, the reducers will update the state & requested data after each actions are triggered.
    * `Utils` - here is where utilities & helper function are.
