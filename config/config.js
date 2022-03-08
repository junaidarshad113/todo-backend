const mongoose = require ('mongoose')
exports.connectDB= async () =>{
    await mongoose.connect('mongodb://localhost:27017/shop')
    .then (con=> console.log("Database Connected"))
}

