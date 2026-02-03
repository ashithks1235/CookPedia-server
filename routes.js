const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')

const router = new express.Router()

//routes
router.get('/recipes',recipeController.getAllRecipesController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//-----authoriased user-------
//view recipe
router.get('/recipes/:id',recipeController.viewRecipeController)

//related recipe
router.get('/recipes-related',recipeController.relatedRecipeController)

module.exports = router