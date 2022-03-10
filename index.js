
const express = require('express')
const app = express()
const port = 3000

//Product İçin tanımlanan yol endpoint api uçları yada yazdıgınız url ne dersenız 
const ProductRouter = require("./routers/Router")
//Verıtabanına baglantı kurmak ıcın kullanılır 
const db = require('./config/index')
//Baglantı kurulur hata varsa düşer
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// https://expressjs.com/en/api.html express.json([options]) tamamen body parser ılgılı burdan okudum 
app.use(express.json());

//Genel link api  tanımımız localhost/api/producktangelenroutelardanıstedıgımız/
app.use('/api', ProductRouter)


 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})