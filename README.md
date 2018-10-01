# StoreAPP - AIP2018
MASTER: [![Build Status](https://travis-ci.com/gta191977649/aip-project-2018-spring.svg?branch=master)](https://travis-ci.com/gta191977649/aip-project-2018-spring)

DEVELOP: [![Build Status](https://travis-ci.com/gta191977649/aip-project-2018-spring.svg?branch=develop)](https://travis-ci.com/gta191977649/aip-project-2018-spring)

React FrontEnd with Loopback server on Generic Auction Site.

## To Run
### Docker? 
- `Going to add steps for docker soon`

### linux/macos
- `sudo chmod +x run.sh`
- `./run.sh`


### Windows
You will need a bash client to run npm I recommend (git-bash)[https://gitforwindows.org/]

Server First:
- Navigate to `/server`
- Open Git-Bash Terminal here
- `npm install && npm start`
- Wait for bootup then start client
- copy .env.example to .env and fill out the details

Client Second:
- Navigate to `/client`
- Open Git-Bash Terminal here
- `npm install && npm run start`
- This should start React on `http://localhost:1337`
