/* eslint-disable react/prop-types */
import ArrowLeftSvg from 'assets/svg/ArrowLeftSvg'
import ArrowRightSvg from 'assets/svg/ArrowRight'
import React from 'react'
import './featuredPictures.css'

const FeaturedPictures = ({ pictures }) => {
  const Arrow = ({ children, right }) => (
    <span className={`featured-pictures__arrow ${right ? 'right' : ''}`}>{children}</span>
  )
  return (
    <section className='featured-pictures'>
      <div className='featured-pictures__row'>
        {pictures.map((pic, i) => (
          <picture className='featured-pictures__container' key={`pic${i}`}>
            <img src={pic} />
            {i === 0 && (
              <Arrow>
                {' '}
                <ArrowLeftSvg />
              </Arrow>
            )}
            {i === 2 && (
                <Arrow right>
                  {' '}
                  <ArrowRightSvg />
                </Arrow>
            )}
          </picture>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPictures
