const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const churchMember = require("./schemas/memberSchema");

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const adult_churchMember = mongoose.model("Member", churchMember);
const typeDefs = `
  type Query {
    hello(name: String): String!
    churchMembers:[adult_churchMember]
  }

  type adult_churchMember{
    id: ID
    firstName: String,
    surName: String,
    dob: String,
    age: Int,
    sex: String,
    service:String,
    registered:Boolean,
    otherNames: String,
    email: String,
    address: String,
    phoneNumber: String,
    nationality: String,
    areaOfResidence: String,



    
    
  }
  type Mutation{
      createMember(
        firstName: String,
        surName:String,
        dob:String,
        age:Int,
        sex: String,
        service:String,
        otherNames: String,
        email: String,
        address: String,
        phoneNumber: String,
        nationality: String,
        areaOfResidence: String, 
        ) : adult_churchMember
      updateMember(id:ID!,firstName:String!,surName:String!,registered:Boolean) : Boolean
      removeMember(surName:String) : Boolean
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    churchMembers: () => adult_churchMember.find(),
  },
  Mutation: {
    createMember: async (
      _,
      {
        firstName,
        surName,
        dob,
        age,
        sex,
        service,
        otherNames,
        email,
        address,
        phoneNumber,
        nationality,
        areaOfResidence,
      }
    ) => {
      const member = new adult_churchMember({
        firstName,
        surName,
        dob,
        age,
        sex,
        service,
        otherNames,
        email,
        address,
        phoneNumber,
        nationality,
        areaOfResidence,
        registered: false,
      });
      await member.save();
      return member;
    },
    updateMember: async (_, { id, firstName, surName, registered }) => {
      await adult_churchMember.findByIdAndUpdate(id, {
        firstName,
        surName,
        registered,
      });
      return true;
    },
    removeMember: async (_, { surName }) => {
      await adult_churchMember.findOneAndRemove({ surName });
      return true;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once("open", function () {
  server.start(() => console.log("Server is running on localhost:4000"));
});
