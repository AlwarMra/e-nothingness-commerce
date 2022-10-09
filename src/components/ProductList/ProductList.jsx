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
    <div className='container productList'>
      {products.map(prod => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default ProductList
