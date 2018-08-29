# StoreAPP - AIP2018
A generic auction website built with NodeJS, Angular 6 and SailsJS.

## Requirements
 - Node Route:
    - npm v8+
 - Docker Route:
    - Docker
    - Docker-Compose


## How to Install
    - Node Route
        1. run `npm i -g sails @angular/cli nodemon` - nodemon optional 
        2. run `npm install` in the server and client directory
        3. open the client directory in a terminal and run `ng serve`
        4. open the server directory in a terminal and run `sails lift --prod`
        5. browse `http://localhost:4200` and application should be visible
    - Docker Route
        1. Change to the root directory `aip-project-2018-spring/`
        2. type `sudo docker-compose up --build` you can optionally type `sudo docker-compose up --build -d` and this will build the containers and run them in the background, without the `-d` the docker-compose file will run the containers in the currently opened terminal. 

## ISSUES
Please report any issues you find.
