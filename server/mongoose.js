const mongoose = require('mongoose');
// import the uri from a something secure(.env?)
const uri = 'mongodb+srv://c00lwhip077:c00lwhip077@userinfo.njsmdfy.mongodb.net/zombieai?retryWrites=true&w=majority'

// userInfo test/examples
var jc = {name: 'jackie', code: 'chan'}
var bk = {name: 'bobby', code: 'kendo'}

const userInfoSchema = new mongoose.Schema({ name: String, code: String })
const User = mongoose.model('User', userInfoSchema);

async function addUser(userInfo) {
  try {
    await mongoose.connect(uri);

    // delete all documents
    // await User.deleteMany({})

    var userDoc = new User({ name: userInfo.name, code: userInfo.code })

    var query = { name: userInfo.name } // find documents with matching name
    console.log('n:', userInfo.name, 'c:', userInfo.code)
    var update = { $set: {name:userInfo.name, code:userInfo.code} } // update if match found
    var options = { new: true, upsert: true } // otherwise create new (upsert)

    await User.findOneAndUpdate(query, update, options)

    // var users = await User.find({'name': 'bobby'}, 'code')
    var users = await User.find({})
    console.log(users)
    
  } finally {
    mongoose.disconnect();
  }
}
exports.addUser = addUser
// module.exports = {addUser: addUser, User: User }
