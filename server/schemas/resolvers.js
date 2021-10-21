const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('Please sign in');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user  = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User not found!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Wrong password!');
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        saveDrink: async (parent, {drink}, context) => {
            // const drink = { ...args };
            if (context.user) {
            //   const user = await User.findOneAndUpdate(
            //     { _id: context.user._id },
            //     { $addToSet: { savedDrinks: drink } },
            //     { new: true }
            //   );
            //   return user;
            //###################################################
                return User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$addToSet:{savedDrinks:{...drink}}},
                    {new:true}
                )
            }
            throw new AuthenticationError('Please sign in');
        },
        removeDrink: async (parent, { drinkID }, context) => {
            if (context.user) {
            //   const user = await User.findOneAndUpdate(
            //     { _id: context.user._id },
            //     { $addToSet: { savedDrinks: { drinkId: drinkId } } },
            //     { new: true }
            //   );
            //   return user;
            //###################################################
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedDrinks: {drinkID}}},
                    {new: true}
                )
            }
            throw new AuthenticationError('Please sign in');
        },
    }
};

module.exports = resolvers;