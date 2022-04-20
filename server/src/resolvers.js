const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Mutation: {
    incrementNumberOfViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementNumberOfViews(id);
        return {
          code: 200,
          success: true,
          message: `Number of views incremented for track id: ${id}`,
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          message: error.extensions.response.body,
          success: false,
          track: null,
        };
      }
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
