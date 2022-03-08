const mongoose = require('mongoose')
const Product = require('../models/Product')

exports.createProduct = async (req, res) =>{
    const user = await Product.create(req.body)
    if(user){
        res.json({
            message:"Record has been saved"
        })
    }
}

exports.getAllProducts = (req, res) =>{
    console.log("All products")
}

exports.getProductById = (req, res) =>{
    console.log("product by id")
}

exports.updateProduct = (req, res) =>{
    console.log("update products")
}

exports.deleteProduct = (req, res) =>{
    console.log("delete products")
}