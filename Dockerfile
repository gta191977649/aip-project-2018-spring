# Node app
FROM node:carbon
# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Add package.json to cache the file
ADD client/package.json /tmp/client/
ADD server/package.json /tmp/server/

# Copy package json files for services
COPY client/package.json /srv/www/client/
COPY server/package.json /srv/www/server/

# Set working dir
WORKDIR /srv/www
# Bundle app source
COPY . ./

# Install app dependencies
# To mitigate issues with npm saturating the network interface we limit the number of concurrent connections
RUN npm config set maxsockets 5 && npm config set progress false

# CD into client run npm install and then build
RUN cd client && npm install && npm run build 

# CD into server directory and NPM install
RUN cd server && npm install 

# Install pm2
RUN npm install -g pm2
# Actual script to start can be overridden from `docker run`
CMD ["pm2", "start", "process.yml", "--no-daemon"]

# Expose ports
EXPOSE 3000
EXPOSE 1337