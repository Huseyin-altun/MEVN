
const express = require('express')
const app = express()
const port = 3000
const winston = require('winston');
const elasticClient = require('./elasticsearch/elasticClient');
//Product İçin tanımlanan yol endpoint api uçları yada yazdıgınız url ne dersenız 
const ProductRouter = require("./routers/Router")
//Verıtabanına baglantı kurmak ıcın kullanılır 

//Baglantı kurulur hata varsa düşer





const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
logger.error("Hata Yakaladım")




 
elasticClient.ping({    
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('Elasticsearch\'e erişilmiyor!');
    } else {
        console.log('Elasticsearch ayakta :)');
    }
});

// https://expressjs.com/en/api.html express.json([options]) tamamen body parser ılgılı burdan okudum 
app.use(express.json());

//Genel link api  tanımımız localhost/api/producktangelenroutelardanıstedıgımız/
app.use('/api', ProductRouter)


 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})