const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Veritabanındakı tablomuz dıye dusunun  
const Product= new Schema(
    {
        name: { type: String, required: true },
        stock: { type: Number, required: true },
        created_date: { type: Date, default: Date.now },
        price:{type:Number },
    },
    
)


/* 
User geldımı 
const User= new Schema(
    {
        
        name: { type: String, required: true },
        stock: { type: Number, required: true },
        created_date: { type: Date, default: Date.now },
        price:{type:Number },
    },
    
)

module.exports = mongoose.model('users', User) veritabanında users diye gorunecek

*/ 




module.exports = mongoose.model('products', Product)