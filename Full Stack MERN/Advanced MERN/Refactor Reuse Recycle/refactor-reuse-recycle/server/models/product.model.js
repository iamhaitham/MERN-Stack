const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // required:[true,"Product title is mandatory!"]  
    },
    price: {
        type: Number,
        // required:[true,"Product price is mandatory!"]  
    },
    description: { 
        type: String,
        // required:[true,"Product description is mandatory"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);
