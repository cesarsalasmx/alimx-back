const { GraphQLObjectType } = require('graphql');
const { AddUser } = require('./AddUser');

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    type: "Mutation",
    fields:{
        AddUser,
    }
});

module.exports = RootMutation;