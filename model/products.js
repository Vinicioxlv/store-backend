const mongoose = require('mongoose')
const {Schema} = mongoose

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    } 
},{
    versionKey: false,
    timestamps: true
})

const productsModel = mongoose.model('products', productsSchema)

module.exports = productsModel