const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://quoctien2811:Os6X1HpwPRArU5yV@nqt2811-mongodb.hhuscbg.mongodb.net/KVWebProducts');
        console.log('Connect successful');
    } 
    catch (error) {
        console.log('Connect failed');
    }
}


module.exports = {connectToDb};
