const { default: mongoose } = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
    image: { type: String, slug: "shortname"},
    shortname: String,
    name: String,
    formula: String,
    origin: String,
    using: Array,
    description: Array,
    pack: String,
    preserve: Array,
    slug: { type: String, slug: "shortname"},
});

module.exports = mongoose.model('Product', Product);
