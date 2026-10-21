const mongoose = require('mongoose');

// Define the Menu schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },  
    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy'],
        required: true
    },

    is_drink: {
        type: Boolean,
        required: true
    },

    ingredients: {
        type: [String],
        required: true
    },

    num_sales: {
        type: Number,
        default: 0
    }
});


const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;