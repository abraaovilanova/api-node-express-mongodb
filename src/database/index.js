const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node-api')
mongoose.Promise = global.Promise

module.exports = mongoose