const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminDB:adminDB@indicaai-hcdbx.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;