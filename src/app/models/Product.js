const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    _id: ObjectId,
    image: String,
    name: String,
    formula: String,
    origin: String,
    using: String,
    description: Array,
    pack: String,
    preserve: String
});

module.exports = mongoose.model('Product', Product);
