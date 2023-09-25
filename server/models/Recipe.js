const mongoose = require('mongoose');
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Recipe name cannot be blank!'],
        
    },
    description: {
        type: String,
        required: [true, 'Description cannot be blank!'],
        
    },
    instructions: {
        type: String,
        required: [true, 'Instructions cannot be blank!'],
        
    },
    cookTime: {
        type: Number,
        required: [true, 'You must enter a cook time!']
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
