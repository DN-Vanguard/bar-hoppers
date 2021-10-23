const { Schema } = require('mongoose');

// Drink subdocument schema
const drinkSchema = new Schema({
    drinkID: {
        type: String,
    },
    drinkName: {
        type: String,
    },
    drinkImg: {
        type: String,
    },
    drinkCategory: {
        type: String,
    },
    drinkAlcoholic: {
        type: String,
    },
    drinkGlass: {
        type: String,
    },
    drinkInstructions: {
        type: String,
    },
});

module.exports = drinkSchema;