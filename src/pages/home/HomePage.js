/* eslint-disable no-unused-vars */
import images from 'assets/images'
import BookForm from 'components/book-form/BookForm'
import CardText from 'components/card-text/CardText'
import FeaturedPictures from 'components/featured-pictures/FeaturedPictures'
import FeaturedTitle from 'components/featured-title/FeaturedTitle'
import Layout from 'components/layout/Layout'
import GridProductCards from 'components/product-card/GridProductCards'
import ProductCard from 'components/product-card/ProductCard'
import TabHeader from 'components/tabs/TabHeader'
import React from 'react'
import './home.css'
import HomeOverView from './HomeOverView'
import HomeTags from './HomeTags'

const HomePage = () => {
  const pictures = [images.carLeft, images.carCenter, images.carRight]
  const products = [
    {
      title: 'Mid-Size SUV',
      rating: 4,
      src: images.otherCar1,
      description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec orci enim, luctus vel nis`,
      price: 79.99
    },
    {
      title: 'Compact Car',
      rating: 4,
      src: images.otherCar2,
      description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec orci enim, luctus vel nis`,
      price: 19.99
    },
    {
      title: 'Mid-Size Sedan',
      rating: 4,
      src: images.otherCar3,
      description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec orci enim, luctus vel nis`,
      price: 44.99
    }
  ]
  return (
    <Layout>
      <FeaturedPictures pictures={pictures} />
      <div className='container-wrapper'>
        <div className='container'>
          <FeaturedTitle title='Tesla Model S' />
          <HomeTags />
        </div>
      </div>
      <HomeOverView />
      <div className='container row-gap'>
        <FeaturedTitle title='Others You May Like' />
        <GridProductCards products={products} />
      </div>
    </Layout>
  )
}

export default HomePage
