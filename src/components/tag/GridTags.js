/* eslint-disable react/prop-types */
import React from 'react'
import Tag from './Tag'
import './tag.css'

const GridTags = ({ tags }) => {
  return (
    <div className='grid-tags'>
      {tags.map((tag, i) => (
        <Tag text={tag} key={`tag${i}`} />
      ))}
    </div>
  )
}

export default GridTags
