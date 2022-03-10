import images from 'assets/images'
import GridTags from 'components/tag/GridTags'
import React from 'react'

const HomeTags = () => {
  const tags = ['Tag', 'LongerTag', 'Tag', 'LongerTag']
  return (
    <div className='home__left-column'>
      <div className='space-container'>
        <GridTags tags={tags} />
        <div>
          <img src={images.heart} style={{ marginRight: '1rem' }} />
          <img src={images.share} />
        </div>
      </div>
    </div>
  )
}

export default HomeTags
