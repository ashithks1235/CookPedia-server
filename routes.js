const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')
const downloadController = require("./controller/downloadController")
const saveRecipeController = require("./controller/saveRecipeController")
const feedbackController = require('./controller/feedbackController')
const jwtMiddleware = require('./middlewares/jwtMiddleware')
const multerMiddleware = require('./middlewares/multerMiddleware')
const adminMiddleware = require('./middlewares/adminMiddleware')
const router = new express.Router()

//routes
router.get('/recipes',recipeController.getAllRecipesController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//add feedback
router.post('/feedbacks',feedbackController.addFeedback)

//get approved feedback
router.get('/approve-feedbacks',feedbackController.getApprovedFeedback)

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

//remove save recipe
router.delete('/save-recipes/:id',jwtMiddleware,saveRecipeController.removeUserSavedItemController)

//updating user picture
router.put('/user/:id',jwtMiddleware,multerMiddleware.single('picture'),userController.updateUserPictureController)

// get user download list
router.get('/user-downloads',jwtMiddleware,downloadController.getUserDownloadListController)

// get download list
router.get('/downloads',adminMiddleware,downloadController.getAllDownloadListController)

module.exports = router