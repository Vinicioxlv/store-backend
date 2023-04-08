const productsModel = require('../model/products')

const getProducts = async()=>{
    return productsModel.find({})
}

const getByIDProducts = async(_id) =>{
     return productsModel.findOne({_id})
 }

const createProducts = async(body) =>{
const newProducts = new productsModel(body)
await newProducts.save()
return newProducts
}

const updateProducts = async(_id, updateObject) =>{
    return productsModel.findOneAndUpdate({_id}, updateObject,{
        upsert: false, 
        new: true
    })
}

const removeProducts = async(_id) =>{
    return productsModel.findByIdAndDelete({_id})
}

module.exports = {
    getProducts,
   getByIDProducts,
    createProducts,
    updateProducts,
    removeProducts
}