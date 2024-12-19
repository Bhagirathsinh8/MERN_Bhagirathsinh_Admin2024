const mongoose = require('mongoose');


const DB = process.env.DATABASE;

const connectDB =  async() =>{
    try {
        await mongoose.connect(DB);
        console.log('Connection Successfully to MongoDB');
    } catch (error) {
        console.log(error);
        process.exit(0);
    }

}

module.exports = connectDB;
