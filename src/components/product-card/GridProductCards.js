/* eslint-disable react/prop-types */
import React from 'react'
import ProductCard from './ProductCard'

const GridProductCards = ({ products }) => {
  return (
    <div className='grid-product-cards'>
      {products.map((product, i) => (
        <ProductCard
          key={`product${i}`}
          title={product.title}
          rating={product.rating}
          src={product.src}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default GridProductCards
