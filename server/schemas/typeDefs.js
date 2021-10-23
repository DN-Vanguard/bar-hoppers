const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        savedDrinks: [Drink]
    }
    type Drink {
        drinkID: String!
        drinkName: String
        drinkImg: String
        drinkCategory: String
        drinkAlcoholic: String
        drinkGlass: String
        drinkInstructions: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveDrink(drinkID: String!, drinkName: String, drinkImg: String, drinkCategory: String, drinkAlcoholic: String, drinkGlass: String, drinkInstructions: String): User
        removeDrink(drinkID: String): User
    }
`;

module.exports = typeDefs;