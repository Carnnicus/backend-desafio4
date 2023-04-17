const express = require('express')
const handlebars = require ('express-handlebars')

const productsRouter = require ('./routes/products.router')
const cartRouter = require ('./routes/cartManager.router')
const viewStatic = require ('./routes/views.router')

const { Server } = require('socket.io') 
const {socketProducts} = require ('./public/js/socketproducts')

const app = express()
const PORT = 8080

app.engine('handlebars',handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
app.use('/', viewStatic)
app.use('/realtimeproducts', viewStatic)

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/static', express.static(__dirname +'/public'))


const httpServer = app.listen(PORT, ()=>{
    console.log(`I'm listening.....`)
})
const io = new Server(httpServer)

app.use('/api/products', productsRouter)

app.use('/api/carts', cartRouter)

socketProducts(io)