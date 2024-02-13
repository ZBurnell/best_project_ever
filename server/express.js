const express = require('express');
const { json } = require('express')
const app = express(); 
const { expressMiddleware } = require('@apollo/server/express4')
const path = require('path');
const { ApolloServer } = require('@apollo/server');
const gql = require('graphql-tag')
const cors = require('cors')
const resolver = require('./resolver.js')
const { readFileSync } = require('fs')
const { buildSubgraphSchema } = require('@apollo/subgraph')
const { addUser } = require('./mongoose.js')

app.use(express.static(path.join(__dirname, '../client','build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client','build','index.html'));
})

app.use(cors());
app.use(express.json());

const typeDefs = gql(
  readFileSync("schema.graphql", {
    encoding: "utf-8"
  })
)

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolver })
});

async function startApollo () {
  await server.start();
  app.use('/user', (req, res) => {
    addUser(req.body)
    res.sendFile((path.join(__dirname, '../client', 'build', 'index.html')));
  })
  app.use('/graphql', cors(), json(), expressMiddleware(server));
}

var url = 'localhost:9000/user'


startApollo()


app.listen(9000);
console.log('listening on port 9000')