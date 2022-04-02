const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const User = new GraphQLObjectType({
    name: "User",
    type: "mutation",
    fields: {
        nombre: { type: GraphQLString },
        segundoNombre: { type: GraphQLString },
        apellidoPaterno: { type: GraphQLString },
        apellidoMaterno: { type: GraphQLString },
        fechaNacimiento: { type: GraphQLDate },
        email: { type: GraphQLString },
        telefono: { type: GraphQLString },
    }
});

module.exports = { User };