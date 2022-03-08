const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;



// {
//     "title": "Laptop HP",
//     "price": "500",
//     "description": "Cotton Bag",
//     "category": "Good Quality",
//     "image": "abcd"
// }