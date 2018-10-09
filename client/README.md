# StoreAPP - AIP2018

React FrontEnd

## To Run

YOU NEED TO MAKE A .ENV file copy and paste the env.example to see the needed fields.

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
