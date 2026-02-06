const saveRecipes = require('../models/saveRecipeModel')

//add to downloads
exports.saveRecipeToCollectionController = async (req,res)=>{
    console.log("inside saveRecipeToCollectionController");
    const {id} = req.params
    const userMail = req.payload
    const {name,image} = req.body
    try{
        const existingRecipe = await saveRecipes.findOne({recipeId:id,userMail})
        if(existingRecipe){
            res.status(409).json("recipe already in your collection ,add another")
        }else{
            const newRecipe = await saveRecipes.create({
                recipeId:id,name,image,userMail
            })
            res.status(200).json(newRecipe)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//get user collection
exports.getUserSavedCollectionController = async (req,res)=>{
    console.log("inside getUserSavedCollectionController");
    const userMail = req.payload
    try{
        const allRecipes = await saveRecipes.find({userMail})
        res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//remove recipe from item collection
exports.removeUserSavedItemController = async (req,res)=>{
    console.log("inside removeUserSavedItemController");
    const {id} = req.params
    try{
        const recipeDetails = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(recipeDetails)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}