const express = require('express');
const { ApolloServer } = require('@apollo/server');
// const { readFileSync } = require('fs');
const { typeDefs, resolvers } = require('./schemas/index.js')
// const {} = require('./resolver.js')
// const resolvers = module.resolvers;
const authMiddleware = module.authMiddleware;
// const gql = require('graphql-tag');
const db = require('./config/config.js')


const app = express();
const PORT = process.env.PORT || 3001;

const uri = 'mongodb+srv://c00lwhip077:c00lwhip077@userinfo.njsmdfy.mongodb.net/zombieai?retryWrites=true&w=majority' // DELETE and use .ENV for KEY

// MONGOOSE CONNECTION
// const mongoose = require('mongoose');
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(uri);
// }

// const UserSchema = new mongoose.Schema({
//   user: String
// });


//Apollo server middleware and starting server
const server = new ApolloServer({
  typeDefs,
  resolvers, 
  context: authMiddleware,
  persistedQueries: false, 
});


//

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const typeDefs = gql(
//   readFileSync("schema.graphql", {
//     encoding: "utf-8",
//   })
// )

// const server = new ApolloServer({ typeDefs, resolvers })
  
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const startServer = async (typeDefs, resolvers) => {
  await server.start();
  // server.applyMiddleware({ app });
};

console.log(db)

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});

startServer(typeDefs, resolvers);