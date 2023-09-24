
const express = require('express');
const router = express.Router({mergeParams: true});
const recipes = require('../controllers/recipes');

router.route('/new')
    .post(recipes.createRecipe)

router.route('/')
    .get(recipes.findAllRecipes)

router.route('/:id')
    .get(recipes.getOneRecipe)

module.exports = router