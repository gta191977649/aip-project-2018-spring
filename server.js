const express = require("express");
require("dotenv").config();
const app = express();
const apiRouter = require('./app/routes/api');

app.use('/api',apiRouter); 

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

const port = process.env.PORT || 3000;  
app.listen(port, ()=> console.log(`Server is listening on port ${port} :)`));
