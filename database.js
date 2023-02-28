const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

module.exports = () => {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.aggkan8.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('Connected to Mongodb......'));
}

