const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

mongoose.connect(process.env.mongodbURI)
    .then(
        app.listen(3000, ()=>{
            console.log('connected to database');
            console.log('server running on port 3000');
        })
    )
    .catch((err)=> {console.log(err);})

