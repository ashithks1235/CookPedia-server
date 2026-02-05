const feedbacks = require('../model/feedbackModel')

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