const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectSchema = new Schema({
    Name: String,
    Username: String,
    Password: String
});

module.exports = mongoose.model("objectSchema", objectSchema);