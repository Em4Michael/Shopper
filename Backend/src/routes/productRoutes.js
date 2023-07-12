import express from 'express';
import bodyParser from 'body-parser'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router();

router.use(bodyParser.json());

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)


export default router;