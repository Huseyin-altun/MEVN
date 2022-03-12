
const  pool=require("../config/index");
const elasticClient = require('../elasticsearch/elasticClient');
//veritabanında fıeld alanlarını aldık Product amacımız tamamen o verileri rahatca kullanabılmemız



getProducts =  async(req, res) => {
   await pool.query('SELECT * FROM product ', (error, results) => {
        if (error) {
          throw error
        }
     return    res.status(200).json(results.rows)
    })
}


postProduct =  async(req, res) => {
  await pool.query('SELECT * FROM product ', (error, results) => {
       if (error) {
         throw error
       }
    return    res.status(200).json(results.rows)
   })
}


getProductElastic=(req, res) => {

  elasticClient.search({
    index:"randomname",
    body:{query: {
      match_phrase_prefix: {
          "ver": "a"
      }
  } }
  },(err,rest)=>{
    if (err) {
      console.log(err);
    }
    else{
      return    res.status(200).json(rest.hits.hits[0]._source);
    }
  })

  
}


postProductElastic=(req, res) => {
  elasticClient.index({
    index:"randomname",
    type:  'customtype',
    body:req.body
  },(err)=>{
    if (err) {
      console.log(err);
    }
    else{
      return    res.status(200).json("data");
    }
  })
}









module.exports = {
  
    getProducts,
    postProduct,
    postProductElastic,
    getProductElastic
}