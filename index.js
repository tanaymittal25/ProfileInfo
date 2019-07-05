const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');

app = express();

app.listen(8080, (err) => {
    if(err)
        console.log(`Error`);
    console.log(`Running on Port 8080`);
});