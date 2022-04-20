const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const TrackAPI = require("./datasources/tracks-api");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
});
