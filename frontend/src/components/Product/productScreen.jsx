import React, { useState, useEffect } from 'react'
import './productScreen.css'
import Product from './Product';
//import products from '../../products'
import { useDispatch, useSelector } from 'react-redux';
//import { listProducts } from '../../actions/productActions';
import axios from 'axios';


function ProductScreen() {

  // const API_URL = 'http://localhost:5000/api/products/' 

  const [products, listProducts] = useState([]);
  //const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products/')

      listProducts(data)
    };

    fetchProducts()
    // dispatch(listProducts())
  }, [])

  // const productList = useSelector(state => state.productList)
  //  const { loading, error } = productList
  return (
    <>
      <h1 className='head'>Latest Products</h1>

      <div className="ui items row center">
        {products.map((product) =>
          <Product product={product} />
        )}
      </div>


    </>
  )
}

export default ProductScreen