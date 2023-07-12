import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import colors from 'colors'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from '../middleware/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 8000;

connectDB()
const app = express();

app.get('/', (req, res) => {
  res.send('Starting...');
});

app.use('/api/products', productRoutes);



 app.get('/api/products', (req, res) => {
  res.json(products)
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on ${port}`.yellow.bold))




//mongodb connection
//mongodb+srv://root:<password>@cluster0.2ryarbp.mongodb.net/?retryWrites=true&w=majority
//app.get('/', (req, res) => {
 // res.send('API has started...')
//})


// app.get('/api/products', (req, res) => {
  //res.json(products)
//}) 

  

//app.get('/api/products/:id',  (req, res) => {
 // const product = products.find((p) => p._id === req.params.id)
 //         res.json(product)
 // })

  





