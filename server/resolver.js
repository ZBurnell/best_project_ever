const addUser = module.addUser

const saveOrUpdateDocument = async (parent, args) => {
  const { name, code } = args;
  const userInfo = {name: name, code: code}
  addUser(userInfo)
};

module.exports = {
  Mutation: {
    saveOrUpdateDocument,
  },
};