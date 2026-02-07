const recipes = require('../models/recipeModel')

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

//add recipe
exports.addRecipeController = async(req,res)=>{
    console.log("inside relatedRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    try{
        const existingRecipe = await recipes.findOne({name})
        if(existingRecipe){
            res.status(409).json("recipe already exists... add another")
        }else{
            const newRecipe = await recipes.create({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })
            res.status(200).json(newRecipe)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}

//edit recipe
exports.editRecipeController = async(req,res)=>{
    console.log("inside editRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    const {id} = req.params
    try{
        const updateRecipe = await recipes.findByIdAndUpdate({_id:id},{
            name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
        },{new:true})
        res.status(200).json(updateRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}

//remove recipe
exports.removeRecipeController = async(req,res)=>{
    console.log("inside removeRecipeController");
    const {id} = req.params
    try{
        const recipeDetails = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(recipeDetails)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}