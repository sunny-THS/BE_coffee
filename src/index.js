// const uri = "mongodb+srv://vothanhtung150600:012349230aA@cluster0.de7wkxf.mongodb.net/?retryWrites=true&w=majority";


const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// connect to mongodb
mongoose.connect(process.env.COFFEE_DATA, () => console.log('Connected to mongodb'))

console.log(process.env.COFFEE_DATA);

// routes
app.get('/api',async (req, res, next) =>  { 
    // let productions = await Product.find();
    // const listtype = ['nc','bia','ta','gao'];
    // let data =  listtype.map( type => { 
    //     return {
    //         "type": type,
    //         "data": productions.filter(product => product.type == type)
    //     }
    // });
  res.status(res.statusCode || 200);
    res.json({
        product : 'data',
    });
});

app.use((req, res, next) => {
    const err = new Error('not found');
    res.status(404);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message
    });
});

app.listen(port, () => console.log("Listening on port 5000"));