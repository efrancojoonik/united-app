/* eslint-disable react/prop-types */
import images from 'assets/images'
import React from 'react'
import './featuredTitle.css'

const FeaturedTitle = ({ title }) => {
  return (
    <div className='featured-title'>
      <img src={images.carIcon} className='featured-title__icon' />
      <h1 className='featured-title__text'>{title}</h1>
    </div>
  )
}

export default FeaturedTitle
