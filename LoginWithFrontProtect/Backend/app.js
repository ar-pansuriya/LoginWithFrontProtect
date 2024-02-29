const express = require('express');
const app= express();
const authRoute  = require('./routes/authRoute');
const cors = require('cors');
const connectDB  = require('./db');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middleware/authMiddleware');


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//all routes for authentication
app.use('/api/auth',authRoute);

app.get('/profile',(req,res)=>{
    console.log('asas');
    res.send({message:'success'})
})


app.listen(5000,()=>{
    connectDB();
    console.log('server is working');
})