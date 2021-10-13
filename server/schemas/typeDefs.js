const { gql } = require('apollo-server-exporess');

const typeDefs = gql`
    input DrinkInput {
        drinkId: Int
        name: String!
        image: String
        tags: [String]
        instructions: String
        ingredient1: String!
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
        _id: ID
        username: String!
        email: String!
        savedDrinks: [Drink]
    }
    type Drink {
        drinkId: Int
        name: String!
        image: String
        tags: [String]
        instructions: String
        ingredient1: String!
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
        user: user
    }
    type Query {
        me: user
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveDrink(input: DrinkInput): User
        removeDrink(drinkId: Int!): User
    }
`;

module.exports = typeDefs;