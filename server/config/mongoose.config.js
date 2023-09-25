// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }


const dbUrl = process.env.DBATLAS_URL || 'mongodb://127.0.0.1:27017/recipes'
//------Mongoose Connection
const mongoose = require('mongoose');
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to Database!');
});