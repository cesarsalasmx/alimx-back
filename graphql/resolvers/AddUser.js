const connection = require('../../lib/db');
const {
    GraphQLObjectType,
    GraphQLString,
} = require ("graphql");
const {
    GraphQLDate
} = require("graphql-iso-date");

const AddUser = new GraphQLObjectType({
    name: "AddUser",
    args: {
        nombre: { type: GraphQLString },
        segundoNombre: { type: GraphQLString },
        apellidoPaterno: { type: GraphQLString },
        apellidoMaterno: { type: GraphQLString },
        fechaNacimiento: { type: GraphQLDate },
        email: { type: GraphQLString },
        telefono: { type: GraphQLString },
    },
    resolve(parentValue,args){

        connection.promise().execute(
                'INSERT TABLE users_test_cesarsalas (nombre, segundo_nombre,apellido_paterno,apellido_materno,fecha_nacimeinto,email, telefono) VALUES (?,?,?,?,?,?,?)'
                [
                    args.nombre,
                    args.segundoNombre,
                    args.apellidoPaterno,
                    args.apellidoMaterno,
                    args.fechaNacimiento,
                    args.email,
                    args.telefono
                ]
                )
            .catch(console.log)
            .then( () => connection.end());
    }
});

module.exports = { AddUser };