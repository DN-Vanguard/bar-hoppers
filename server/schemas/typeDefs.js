const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input DrinkInput {
        drinkID: Int!
        drinkName: String!
        drinkImg: String
        drinkCategory: String
        drinkAlcoholic: String
        drinkGlass: String
        drinkInstructions: String
        ingredient1: String
        ingredient2: String
        ingredient3: String
        ingredient4: String
        ingredient5: String
        ingredient6: String
        ingredient7: String
        ingredient8: String
        ingredient9: String
        ingredient10: String
        ingredient11: String
        ingredient12: String
        ingredient13: String
        ingredient14: String
        ingredient15: String
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        savedDrinks: [Drink]
    }
    type Drink {
        drinkID: Int!
        drinkName: String!
        drinkImg: String
        drinkCategory: String
        drinkAlcoholic: String
        drinkGlass: String
        drinkInstructions: String
        ingredient1: String
        ingredient2: String
        ingredient3: String
        ingredient4: String
        ingredient5: String
        ingredient6: String
        ingredient7: String
        ingredient8: String
        ingredient9: String
        ingredient10: String
        ingredient11: String
        ingredient12: String
        ingredient13: String
        ingredient14: String
        ingredient15: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        # users: [User]
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveDrink(drink: DrinkInput): User
        removeDrink(drinkID: Int!): User
    }
`;

module.exports = typeDefs;