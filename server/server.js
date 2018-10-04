const express = require('express');
const apiRouter = require('./routes/api');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongourl = require('./config/keys').mongo;
const app = express();
require('dotenv').config();
// Redefine promise to bluebird for performance increase?
global.Promise = Promise;

// Security Protocols
app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1); // trust first proxy
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Passport JWT Strategy
require('./config/passport')(passport);

// Database connection
mongoose
    .connect(
        mongourl,
        {useNewUrlParser: true}
    )
    .then(() => console.log('Mongo Connected...'))
    .catch((err) => console.log(err));
// Set Mongoose Promise engine to Bluebird!
mongoose.Promise = Promise;

// Setup Routes
app.use('/api', apiRouter);
app.use(function(req, res) {
  res.status(404).send('Sorry can\'t find that!');
});

// Setup and Run listening server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port} :)`));
