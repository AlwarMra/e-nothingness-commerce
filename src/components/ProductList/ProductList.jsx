import React, { useEffect, useState } from 'react'
import './ProductList.css'
// import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import getProducts from '../../services/getProducts'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(prods => setProducts(prods))
  }, [])

  return (
    <div className='container product__list'>
      <h2 className='product__list__title'>Our products</h2>
      <div className='product__list__grid'>
        {products.map(prod => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
