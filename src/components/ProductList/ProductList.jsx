import React from 'react'
import './ProductList.css'
import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  return (
    <div className='container productList'>
      {products.map(prod => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default ProductList
