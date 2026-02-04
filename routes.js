const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')
const downloadController = require("./controller/downloadController")
const saveRecipeController = require("./controller/saveRecipeController")
const jwtMiddleware = require('./middlewares/jwtMiddleware')
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

//download recipe
router.post('/downloads/:id',jwtMiddleware,downloadController.addToDownloadController)

//save recipe
router.post('/save-recipe/:id',jwtMiddleware,saveRecipeController.saveRecipeToCollectionController)

//get save recipe
router.get('/save-recipes',jwtMiddleware,saveRecipeController.getUserSavedCollectionController)

module.exports = router