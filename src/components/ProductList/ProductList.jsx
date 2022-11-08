import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import getProducts from '../../services/getProducts'
import CardSkeleton from '../Skeletons/CardSkeleton'
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])

  const skeletons = Array.from({ length: 3 }, (_, i) => (
    <CardSkeleton key={i} />
  ))
  useEffect(() => {
    getProducts().then(prods => setProducts(prods))
  }, [])

  return (
    <div className='container product__list'>
      <h2 className='product__list__title'>Our products</h2>
      <div className='product__list__grid'>
        {products.length === 0
          ? skeletons
          : products.map(prod => <ProductCard key={prod.id} prod={prod} />)}
      </div>
    </div>
  )
}

export default ProductList
