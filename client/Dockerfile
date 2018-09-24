# Stage 1
FROM node:carbon as react-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
run npm install -g serve
CMD ["serve","-s","build"]