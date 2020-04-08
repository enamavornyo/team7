const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const Adult = require("./schemas/memberSchema");

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const typeDefs = `
  type Query {
    hello(name: String): String!
    adults: [Adult]
  }

  type Adult{
    id: ID!
    firstName: String!
    surName: String,
    
    
  }
  type Mutation{
      createAdult(firstName: String!) : Adult
      updateAdult(id:ID!,firstName:String!) : Boolean
      removeAdult(id:ID!) : Boolean
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    adults: () => Adult.find()
  },
  Mutation: {
    createAdult: async (_, { firstName }) => {
      const adult = new Adult({ firstName, surName: "Av" });
      await adult.save();
      return adult;
    },
    updateAdult: async (_, { id, firstName }) => {
      await Adult.findByIdAndUpdate(id, { firstName });
      return true;
    },
    removeAdult: async (_, { id }) => {
      await Adult.findByIdAndRemove(id);
      return true;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once("open", function() {
  server.start(() => console.log("Server is running on localhost:4000"));
});
