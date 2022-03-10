/* eslint-disable react/prop-types */
import images from 'assets/images'
import ItemTitle from 'components/item-title/ItemTitle'
import React from 'react'
import './productCard.css'

const ProductCard = ({ src, title, rating, description, price }) => {
  const starFilled = <img src={images.ratingFilled} />
  const starEmpty = <img src={images.ratingEmpty} />
  const ratingJsx = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) ratingJsx.push(starFilled)
    else ratingJsx.push(starEmpty)
  }

  return (
    <div className='product-card card-border'>
      <div className='product-card__image-content'>
        <div className='product-card__image-container'>
          <img className='product-card__image' src={src}/>
        </div>
        <div className='product-card__icon-container'>
          <img className='product-card__icon' src={images.carIcon} />
        </div>
      </div>
      <div className='product-card__content'>
        <ItemTitle>{title}</ItemTitle>
        <div className='product-card__rating'>{ratingJsx}</div>
        <p className='product-card__description'>{description}</p>
        <p className='product-card__text-footer'>
          FROM <span className='product-card__price'>${price}</span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
