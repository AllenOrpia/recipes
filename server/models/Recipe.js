const mongoose = require('mongoose');
const Schema = new mongoose.Schema

const recipeSchema = new Schema({
    name : {
        type: String,
        required : [true, 'Recipe name cannot be blank!'],
        minlength: [3, 'Recipe name must be atleast 3 characters']
    },
    description : {
        type: String,
        required : [true, 'Description cannot be blank!'],
        minlength: [3, 'Recipe description must be atleast 3 characters']
    },
    instructions : {
        type: String,
        required : [true, 'Instructions cannot be blank!'],
        minlength: [3, 'Recipe instruction must be atleast 3 characters']
    },
    cookTime : {
        type: Number,
        required: [true, 'You must enter a cook time!']
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
