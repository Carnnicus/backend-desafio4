const {Router} = require('express')
const router = Router()
const { ProductManager }  = require('../manager/productManager.js')
const producto = new ProductManager()

router.get('/', async(req, res) =>{
    
    const prodList =  await producto.getProducts()

    let datosProd = {
        listaProductos: prodList
    }
    res.render('home', datosProd)
})

router.get('/realtimeproducts', async(req, res) =>{
    
    const prodList =  await producto.getProducts()

    let datosProd = {
        listaProductosLive: prodList
    }
    res.render('realTimeProducts', datosProd)
})

module.exports = router