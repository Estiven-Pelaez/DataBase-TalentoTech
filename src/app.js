const express = require('express');
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

app.use(cors());
// Importar rutas
const productRoutes = require("./routes/products.routes");
const salesRoutes = require('./routes/sale.routes')
require('dotenv').config();


// conectarnos mongoose
mongoose
    .connect(process.env.DB_URL)
    .then( db => console.log('Chelo Connected'))
    .catch( err => console.log(err));

app.get('/', function(req, response){
    response.send('Hello Word');
});

// configuraciones
app.use(express.urlencoded({extended:false}));

// configurar rutas
app.get("/", function (req, res) {
    res.send("Hello from vercel");
  });
app.use('/products', productRoutes)
app.use('/sales', salesRoutes)

app.listen(3000, () => {
    console.log('Server runing');
});