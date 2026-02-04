const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.role = jwtResponse.role
            req.payload = jwtResponse.email
            next()
        }catch(err){
            res.status(404).json("authorization failed!! invalid token")
        }
    }else{
        res.status(404).json("authorization failed!! token missing")
    }
    
}

module.exports = jwtMiddleware