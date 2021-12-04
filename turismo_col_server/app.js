const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.header(
       "Access-Control-Allow-Headers",
       "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *"
     );
     res.setHeader(
       "Acces-Control-Allow-Methods",
       "GET, POST, PUT, HEAD, PATCH, DELETE, OPTIONS"
     );
     next();
 });
 
 module.exports = app;