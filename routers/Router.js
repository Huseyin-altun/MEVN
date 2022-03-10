const express = require('express')
//Controlerdakı amacımız ıslemlerı parcalara ayırmak suan sadece product oldugu ıcın ındex 
const Products = require('../controllers/index')
// ornek user  geldıgınde const User = require('../controllers/user')
//Router nesnesı yaratıyoruz
const router = express.Router()

router.post('/product', Products.createProduct)

router.get('/getallproduct', Products.getProducts)
router.get('/getfindproduct/:id', Products.getProductFind)
router.put('/getupdate/:id', Products.getUpdate)
module.exports = router