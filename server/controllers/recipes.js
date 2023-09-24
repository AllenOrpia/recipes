const Recipe = require('../models/Recipe');


module.exports.createRecipe = async (req,res) => {
    
    const newRecipe = new Recipe(req.body.recipe)
    await newRecipe.save();
    res.json({recipe: newRecipe})

}

module.exports.getOneRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id).populate('author')

    if (!recipe) {
        res.json({message: 'No Recipe found'})
    } else {
        res.json({recipe : recipe})
    }
}

module.exports.findAllRecipes = async (req, res) => {
    const recipes = await Recipe.find({});
    if (!recipes) {
        res.json({message: 'No recipes found'})
    } else {
        res.json({recipes: recipes})
    }
}