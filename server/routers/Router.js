const express = require('express')
//Controlerdakı amacımız ıslemlerı parcalara ayırmak suan sadece product oldugu ıcın ındex 
const Products = require('../controllers/index')
// ornek user  geldıgınde const User = require('../controllers/user')
//Router nesnesı yaratıyoruz
const router = express.Router()



router.get('/getallproduct', Products.getProducts)
router.post('/product', Products.postProduct)
router.post('/productEl', Products.postProductElastic)
router.get('/productElg', Products.getProductElastic)
module.exports = router