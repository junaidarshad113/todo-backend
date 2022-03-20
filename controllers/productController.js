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

exports.getAllProducts = async (req, res) =>{
    const products= await Product.find()
    
    if(products){
        res.json ({
          message : "success", 
          products: products 
        })
    }
    
}

exports.getProductById = async (req, res) =>{
    const product= await Product.findById (req.params.id)
    if(product){
        res.json({
            message: 'success',
            product: product
        })
    }

}

exports.updateProduct = async (req, res) =>{
    const product= await Product.findOneAndUpdate( req.params._id)
   console.log(product)
    product.title= Product.body.title;
    product.price= Product.body.price;
    product.description= Product.body.description;

res.send("prod sucessfully updated")
   

}

exports.deleteProduct = async (req, res) =>{
const product = await Product.findByIdAndDelete( req.params.id)    
    if(product){
       res.json({
        message: "Delete Product successfully "
       })}}




       