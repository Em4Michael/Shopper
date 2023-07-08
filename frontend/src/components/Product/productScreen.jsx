import React from 'react'
import './productScreen.css'
import products from '../../products';
import Product from './Product';

function productScreen() {
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

export default productScreen