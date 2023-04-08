const express = require('express')
const router = express.Router()
const  {productsController} = require('../controllers')
const {
    getProducts,
    getByIDProducts,
     createProducts,
     updateProducts,
     removeProducts
} = productsController

router.get('/', async(req,res)=>{
    const products = await getProducts()
    res.send(products)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const products = await getByIDProducts(id)
  
    // para no hacer product === null, product === undefined, typeof product ...
    if (!products) {
      res.status(404)
      return res.send({
        message: `Producto: ${id} no encontrado`
      })
    }
  
    return res.send(products)
  })
  
router.post('/', async(req,res)=>{
    const body = req.body
   try{
    const newProducts = await createProducts(body)
    res.send(newProducts)
   } catch(err){
    console.error(err)
   }
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const body = req.body
    const products = await updateProducts(id ,body)
    if(!products){
        return res.send({
            message: `Producto con ${id} no encontrado `
        })
    }
    res.send(products)
})

router.delete('/:id', async(req,res)=>{
const {id} = req.params
const result = await removeProducts(id)

res.send(result)
})

module.exports = router