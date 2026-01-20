const mongoose = require('mongoose')

const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(res=>{
    console.log("database connection successfull");
}).catch(error=>{
    console.log("database connection failed");
    console.log(error);
})