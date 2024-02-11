const app = express();
const PORT = process.env.PORT || 3001;

//Apollo server middleware and starting server
const server = new ApolloServer({
  typeDefs,
  resolvers, 
  context: authMiddleware,
  persistedQueries: false, 
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const startServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
};

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});

startServer(typeDefs, resolvers);
