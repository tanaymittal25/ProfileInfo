const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/secret');

app = express();

mongoose.connect(config.Database, {useNewUrlParser: true}, (err) => {
    if(err)
        console.log(`Error with DB`);
    console.log(`Connected to Database`);
})

app.listen(config.PORT, (err) => {
    if(err)
        console.log(`Error`);
    console.log(`Running on Port ${config.PORT}`);
});