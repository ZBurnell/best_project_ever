const mongoose = require('mongoose');
// require('dotenv').config();
// const CONNECTION_STRING = process.env.CONNECTION_STRING

const CONNECTION_STRING = 'MONGODB_URI = mongodb+srv://c00lwhip077:c00lwhip077@userinfo.njsmdfy.mongodb.net/zombieai?retryWrites=true&w=majority' // REMOVE BEFORE COMMIT

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ZombieAI');

module.exports = mongoose.connection;