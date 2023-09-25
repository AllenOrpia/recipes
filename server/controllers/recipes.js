const Recipe = require('../models/Recipe');


module.exports.createRecipe = async (req, res) => {

    const recipe = new Recipe(req.body)
    await recipe.save()
    res.json({ recipe: recipe })

}

module.exports.getOneRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id)

    if (!recipe) {
        res.json({ message: 'No Recipe found' })
    } else {
        res.json({ recipe: recipe })
    }
}

module.exports.findAllRecipes = async (req, res) => {
    const recipes = await Recipe.find({});
    if (!recipes) {
        res.json({ message: 'No recipes found' })
    } else {
        res.json({ recipes: recipes })
    }
}