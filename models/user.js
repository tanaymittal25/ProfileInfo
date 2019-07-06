const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userObj = new Schema ({
    Name : String,
    Email : String,
    Password : String
});

module.exports = mongoose.model("userObj", userObj);