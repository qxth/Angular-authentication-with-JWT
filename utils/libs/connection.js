const mongoose = require('mongoose');

require('dotenv').config({ path: '.env'})
module.exports = app => {
const mongoConnect = async () => {

    try {
        await mongoose.connect(process.env.DB_URL, 
            {useNewUrlParser: true, useUnifiedTopology:true}
            );
        console.log(`The database is connected to`, process.env.DB_URL)
    }
    catch(e) {
        console.log(e)
    }

}

mongoConnect()
}