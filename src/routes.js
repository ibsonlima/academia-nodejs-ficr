const { Router } = require('express')
// Controllers
const ProductsController = require('./controllers/ProductsController')
const app = Router()

app.post('/products', ProductsController.create)

app.get('/products', ProductsController.read)

app.get('/products/:id', ProductsController.findone)

app.put('/products/:id', ProductsController.update)

app.delete('/products/:id', ProductsController.delete)

module.exports = app