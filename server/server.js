const express = require("express");
require("dotenv").config();
const app = express();
const apiRouter = require('./routes/api');
const helmet = require('helmet');
const session = require('express-session');
const mongoose = require('mongoose');
//Security Protocols
app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'k1ttyk4t',
  name: 'sessionId'
}));

//Database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Mongo Connected..."))
    .catch(err => console.log(err));
    
app.use('/api',apiRouter); 
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 3000;  
app.listen(port, ()=> console.log(`Server is listening on port ${port} :)`));
