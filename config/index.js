const mongoose = require('mongoose')
//baglantı cumlecıgı  env baglarız
const mongoDB = 'mongodb+srv://kullanıcıadınız:sifreniz@clusteradınız.godfi.mongodb.net/databaseısmınız?retryWrites=true&w=majority';
mongoose
    .connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db