const recipes = require('../model/recipeModel')

//get all recipes
exports.getAllRecipesController = async(req,res)=>{
    console.log("inside getAllRecipesController");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//view recipe
exports.viewRecipeController = async(req,res)=>{
    console.log("inside viewrecipecontroller");
    const {id} = req.params
    try{
        const viewRecipe = await recipes.findById({_id:id})
        res.status(200).json(viewRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}

//related recipe
exports.relatedRecipeController = async(req,res)=>{
    console.log("inside relatedRecipeController");
    const cuisine = req.query.cuisine
    try{
        const allRelatedRecipe = await recipes.find({cuisine})
        res.status(200).json(allRelatedRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}