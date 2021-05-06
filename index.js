const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}));
const methodOverride = require('method-override')
const Product = require('./models/product')
app.use(methodOverride('_method'))
const productRoutes = require('./routes/product')

app.set('view engine' , 'ejs');


//database 
const mongoose = require('mongoose');
const { assert } = require('console');
// const seedDB = require('./seed');
mongoose.connect('mongodb://localhost/blogs', 
{useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false
})
 .then(()=>{
    console.log("db connected");
})
.catch(err=>{
    console.log("connection error");
})


app.use(productRoutes);

// seedDB();
// get all the products


app.listen(3000,()=> {
    console.log("your server is start now port nuber 3000!!");
})


