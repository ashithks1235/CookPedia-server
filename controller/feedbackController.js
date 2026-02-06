const feedbacks = require('../models/feedbackModel')

//add feedbacks
exports.addFeedback = async (req,res)=>{
    console.log("inside addFeedbacks controller");
    const {name,email,message} = req.body
    try{
        const newFeedback = await feedbacks.create({
            name,email,message
        })
        res.status(200).json(newFeedback)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
    
}

//get approved feedbacks
exports.getApprovedFeedback = async (req,res)=>{
    console.log("inside getApprovedFeedback controller");
    try{
        const approveFeedbacks = await feedbacks.find({status:{$eq:"approve"}})
        res.status(200).json(approveFeedbacks)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
    
}

//get all feedbacks
exports.getAllFeedback = async (req,res)=>{
    console.log("inside getAllFeedback controller");
    try{
        const allFeedbacks = await feedbacks.find()
        res.status(200).json(allFeedbacks)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
    
}

//update feedbacks status
exports.updateFeedback = async (req,res)=>{
    console.log("inside updateFeedback controller");
    const {id} = req.params
    const {status} = req.body
    try{
        const updateFeedback = await feedbacks.findById({_id:id})
        updateFeedback.status = status
        await updateFeedback.save()
        res.status(200).json(updateFeedback)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
    
}