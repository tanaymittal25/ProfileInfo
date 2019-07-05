const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/secret');

app = express();

app.listen(config.PORT, (err) => {
    if(err)
        console.log(`Error`);
    console.log(`Running on Port ${config.PORT}`);
});