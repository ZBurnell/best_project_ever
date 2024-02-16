const express = require('express');
const db = require('./config/config.js');
const { json } = require('express');
const cors = require('cors');
const path = require('path');

const { ApolloServer } = require('@apollo/server');
const { typeDefs, resolvers } = require('./schemas/index.js');
const authMiddleware = module.authMiddleware;
const { addUser } = require('./mongoose.js');
const { expressMiddleware } = require('@apollo/server/express4')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Apollo server middleware and starting server
const server = new ApolloServer({
  typeDefs,
  resolvers, 
  context: authMiddleware,
  persistedQueries: false, 
});

async function startServer () {
  await server.start();
  app.use('/user', (req, res) => {
    addUser(req.body)
    res.sendFile((path.join(__dirname, '../client/build')));
  })
  app.use('/graphql', cors(), json(), expressMiddleware(server));
}

console.log(db)

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});

startServer(typeDefs, resolvers);