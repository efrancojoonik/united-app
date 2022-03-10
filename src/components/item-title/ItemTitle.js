/* eslint-disable react/prop-types */
import React from 'react'
import './itemTitle.css'

const ItemTitle = ({ children }) => {
  return <h3 className='item-title'>{children}</h3>
}

export default ItemTitle
