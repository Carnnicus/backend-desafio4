const { ProductManager }  = require('../../manager/productManager')
const productManager = new ProductManager()

const socketProducts = async(io) =>{
    const products = await productManager.getProducts()
    io.on('connection', socket =>{
        console.log('Nuevo Cliente Conectado')
        socket.emit('productos', products)
    })
}

module.exports = {
    socketProducts
}