const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "It returns the list of tracks for dashboard"
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    modules: [Module!]!
    description: String
    numberOfViews: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
  }
`;

module.exports = typeDefs;
