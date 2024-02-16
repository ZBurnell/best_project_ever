const mongoose = require('mongoose');
require('dotenv').config();

const userInfoSchema = new mongoose.Schema({ name: String, code: String })
const User = mongoose.model('User', userInfoSchema);

async function addUser(userInfo) {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    var query = { name: userInfo.name } // find documents with matching name
    console.log('n:', userInfo.name, 'c:', userInfo.code)
    var update = { $set: {name:userInfo.name, code:userInfo.code} } // update if match found
    var options = { new: true, upsert: true } // otherwise create new (upsert)

    await User.findOneAndUpdate(query, update, options)

    var users = await User.find({})
    console.log(users)
    
  } finally {
    mongoose.disconnect();
  }
}
exports.addUser = addUser
