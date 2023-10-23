// connecting to the database
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser : true , 
            useUnifiedTopology : true ,
        })

        console.log(`MongoDb Connected ${conn.connection.host}`.cyan.underline.bgBlack);
    } catch (error) {
        console.log(`Error in connecting to the database: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = connectDB;