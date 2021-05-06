const express  = require('express');
const router = express.Router();
const Product = require('../models/product');
router.get('/product',async(req , res)=>{
    const products =  await Product.find({})
    res.render('index', {products});
   })
   // form to create new item 
   router.get('/product/new',async(req , res)=>{
      
       res.render('new');
    })
    router.post('/products', async(req,res)=>{
   // await productSchema.create()
   const product = req.body;
   await Product.create(product);
   res.redirect('/product');
   
    })
    router.get('/products/:id', async(req,res)=>{
    
    const product = await Product.findById(req.params.id);
     res.render ('show',{product});
    })
   
   
    //edit blog
    router.get('/products/:id/edit', async(req,res)=>{
    
       const product = await Product.findById(req.params.id);
        res.render ('edit',{product});
       })
       router.patch('/products/:id/',async(req,res)=>{
           await Product.findByIdAndUpdate(req.params.id, req.body);
           res.redirect(`/products/${req.params.id}`);
            
       })
       router.delete('/products/:id/', async(req,res)=>{
    
           const product = await Product.findByIdAndDelete(req.params.id);
           res.redirect('/product');
           
           })
           module.exports = router;