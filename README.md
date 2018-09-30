# StoreAPP - AIP2018
MASTER: [![Build Status](https://travis-ci.com/gta191977649/aip-project-2018-spring.svg?branch=master)](https://travis-ci.com/gta191977649/aip-project-2018-spring)

DEVELOP: [![Build Status](https://travis-ci.com/gta191977649/aip-project-2018-spring.svg?branch=develop)](https://travis-ci.com/gta191977649/aip-project-2018-spring)

React FrontEnd with Loopback server on Generic Auction Site.

## To Run
### Docker Compose? 
No problem just run `docker-compose up -d` in the `/` (root) directory

### linux/macos

- `cd /node/`
- `sudo chmod +x run.sh`
- `./run.sh`


### Windows
You will need a bash client to run npm I recommend (git-bash)[https://gitforwindows.org/]

Server First:
- Navigate to `/node/server`
- Open Git-Bash Terminal here
- `npm install && npm start`
- Wait for bootup then start client

Client Second:
- Navigate to `/node/client`
- Open Git-Bash Terminal here
- `set PORT=1337 && npm install && npm run start`
- This should start React on `http://localhost:1337`
