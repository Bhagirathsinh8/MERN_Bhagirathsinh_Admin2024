const mongoose = require('mongoose');
const DB = 'mongodb+srv://bhagirathnakum8:nakum7773@cluster0.difu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect = async() =>{
    try {
        await mongoose.connect(DB);
        console.log('Connection Successfully to MongoDB');
    } catch (error) {
        console.log(error);
        process.exit(0);
    }

}