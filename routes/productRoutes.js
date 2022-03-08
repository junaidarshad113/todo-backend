const express = require('express')
const router = express.Router()
const {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} = require('../controllers/productController')

router.route('/product/new').post(createProduct)




module.exports = router