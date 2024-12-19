require('dotenv').config()
const express = require('express');
const  cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const  authRoute = require('./router/auth-router');
const  contactRoute = require('./router/contact-router');
const  serviceRoute = require('./router/service-router');
const connectDB  = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');

// let tackle cors 
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    // optionsSuccessStatus: 200
};

//use cors middleware to handle cors request
app.use(cors(corsOptions)); 

//Middleware
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);

app.use(errorMiddleware);



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
