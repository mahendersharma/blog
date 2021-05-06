const mongoose = require('mongoose');
const Product = require('./models/product');

const arr = [
    {
        name: "iphone 12",
        price:10000,
        desc: "Blast past fast A14 Bionic the fastest chip in a smartphone An edge-to-edge OLED display Ceramic Shield with four times better drop performance And Night mode on every camera iPhone 12 has it all in two perfect sizes"
    }
    ,
    {
        name: "iphone 11",
        price:10000,
        desc: "Blast past fast A14 Bionic the fastest chip in a smartphone An edge-to-edge OLED display Ceramic Shield with four times better drop performance And Night mode on every camera iPhone 12 has it all in two perfect sizes"
    }
    ,
    {
        name: "iphone XR",
        price:10000,
        desc: "Blast past fast A14 Bionic the fastest chip in a smartphone An edge-to-edge OLED display Ceramic Shield with four times better drop performance And Night mode on every camera iPhone 12 has it all in two perfect sizes"
    }
    ,
    {
        name: "iphone 12 pro",
        price:10000,
        desc: "Blast past fast A14 Bionic the fastest chip in a smartphone An edge-to-edge OLED display Ceramic Shield with four times better drop performance And Night mode on every camera iPhone 12 has it all in two perfect sizes"
    }
    ,
    {
        name: "samsung ultra pro",
        price:10000,
        desc: "Blast past fast A14 Bionic the fastest chip in a smartphone An edge-to-edge OLED display Ceramic Shield with four times better drop performance And Night mode on every camera iPhone 12 has it all in two perfect sizes"
    }
    ,
    {
        name: "macbook air pro",
        price:10000,
        desc: "Blast past fast A14 Bionic the fastest chip in a smartphone An edge-to-edge OLED display Ceramic Shield with four times better drop performance And Night mode on every camera iPhone 12 has it all in two perfect sizes"
    }
];
function seed(){
    Product.insertMany(arr)
    .then(()=>{
        console.log("db insert")
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports = seed;
