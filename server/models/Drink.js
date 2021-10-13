const { Schema } = require('mongoose');

// Drink subdocument schema
const drinkSchema = new Schema({
    drinkId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    tags: [
        {
            type: String,
        },
    ],
    instructions: {
        type: String,
    },
    ingredient1: {
        type: String,
    },
    ingredient2: {
        type: String,
    },
    ingredient3: {
        type: String,
    },
    ingredient4: {
        type: String,
    },
    ingredient5: {
        type: String,
    },
    ingredient6: {
        type: String,
    },
    ingredient7: {
        type: String,
    },
    ingredient8: {
        type: String,
    },
    ingredient9: {
        type: String,
    },
    ingredient10: {
        type: String,
    },
    ingredient11: {
        type: String,
    },
    ingredient12: {
        type: String,
    },
    ingredient13: {
        type: String,
    },
    ingredient14: {
        type: String,
    },
    ingredient15: {
        type: String,
    },
});

module.exports = drinkSchema;