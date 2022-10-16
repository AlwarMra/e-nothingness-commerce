import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductBySlug } from '../../services/getProduct'
import { AddButton } from '../../components/index'
import './Product.css'

const Product = () => {
  const [product, setProduct] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    getProductBySlug(slug)
      .then(res => {
        setProduct(res)
      })
      .catch(err => console.log(err))
  }, [slug])

  return (
    <div className='container'>
      {product.length !== 0 && (
        <div className='product'>
          <div className='product__image'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='product__info'>
            <h1 className='product__name'>{product.name}</h1>
            <p className='product__vendor'>Produced by: {product.vendor}</p>
            <p className='product__description'>{product.description}</p>
            <div className='product__buttons'>
              <AddButton product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
