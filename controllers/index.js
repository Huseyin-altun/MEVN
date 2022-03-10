const Product = require('../models/index')
//veritabanında fıeld alanlarını aldık Product amacımız tamamen o verileri rahatca kullanabılmemız
createProduct = async(req, res) => {
    
    //req post edılen dataların hepsi req.body
    if (!req.body) {
        return res.status(400).json({ // statu 400 ise 
            code: 1,
            msg: 'false', 
         
        })
    }

    const product = new Product(req.body) // Productan nesnelerı esler

    if (!product) {
        return res.status(400).json({ code: 1, msg: msg })
    }

    await  product
        .save()//veritabanına kaydeder 
        .then(() => {
            return res.status(201).json({
                code: 0,
                msg: 'sucess',
              data:product
               
            })
        })
        .catch(error => {
            return res.status(400).json({
                code,
                message: 'false',
            })
        })
}



getProducts = async (req, res) => {
    //veritabanından arar ılk parametre ıcıne aradıgımız seyı yada bos bırakıp tum datayı alırız
    await Product.find({}, (err, product) => { 
        if (err) {
            return res.status(400).json({ code: 1, msg: msg })
        }
        if (!product.length) {
            return res
                .status(404)
                .json({ code: 1, msg: `false` })
        }
        return res.status(200).json({ code: 0, msg:'sucess',data: product })
    }).catch(err => console.log(err))
}


getProductFind = async (req, res) => {
    // İd özel arar 
    await Product.findById(req.params.id, (err, product) => {
        if (err) {
            return res.status(400).json({ code: 1, msg: msg })
        }
     
        return res.status(200).json({ code: 0, msg:'sucess',data: product })
    }).catch(err => console.log(err))
}

getUpdate = async(req, res) => {
    

    if (!req.body) {
        return res.status(400).json({
            code: 1,
            msg: 'false',
         
        })
    }

    
    
    Product.updateOne({_id:req.params.id},req.body,function (err, docs) {
        if (err){
            console.log(err)
        }
        else{

            console.log("Updated Docs : ", docs);
        }
    });
}
module.exports = {
    createProduct,
    getProducts,
    getProductFind,
    getUpdate,
}
