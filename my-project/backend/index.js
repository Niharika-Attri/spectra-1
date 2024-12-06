const express = require('express');
const { default: mongoose } = require('mongoose');
const studentRouter = require('./router/student.router')
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

mongoose.connect(process.env.mongodbURI)
    .then(
        app.listen(3000, ()=>{
            console.log('connected to database');
            console.log('server running on port 3000');
        })
    )
    .catch((err)=> {console.log(err);})

app.use('/student', studentRouter)