const express = require("express");
require("dotenv").config();
const app = express();
const apiRouter = require('./routes/api');
const helmet = require('helmet');
const session = require('express-session');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//Redefine promise to bluebird for performance increase?
global.Promise = Promise;


//Security Protocols
app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1); // trust first proxy
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

///For Passport
require('./authentication/init')(passport);

//Database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Mongo Connected..."))
    .catch(err => console.log(err));
//Set Mongoose Promise engine to Bluebird!
mongoose.Promise = Promise;


//Setup Routes
app.use('/api',apiRouter); 
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

//Setup and Run listening server
const port = process.env.PORT || 3000;  
app.listen(port, ()=> console.log(`Server is listening on port ${port} :)`));
