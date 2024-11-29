const express = require('express');
const app = express();
const PORT = 5000;
const router = require('./router/auth-router');
const connectDB = require('./utils/db')


//Middleware
app.use(express.json());

app.use('/api/auth', router);



// app.get('/',(req,res)=>{
//     res.status(200).send('Hello from Server!');
// });

// app.get('/register',(req,res)=>{
//     res.status(200).send('Welcome To Register!');
// });



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
