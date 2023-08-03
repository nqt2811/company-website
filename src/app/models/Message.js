const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Message = new Schema({
    name: String,
    email: String,
    message: String,
});

module.exports = mongoose.model('Message', Message);
