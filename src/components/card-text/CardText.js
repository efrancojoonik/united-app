/* eslint-disable react/prop-types */
import ItemTitle from 'components/item-title/ItemTitle'
import React from 'react'
import './cardText.css'

const CardText = ({ title, icon, content }) => {
  return (
    <div className='card-text card'>
      <div className='card-text__header'>
        <ItemTitle>{title}</ItemTitle>
        <img className='card-text__icon' src={icon} />
      </div>
      <div className='card-text__content'>
        {content.map((text, i) => (
          <p key={`p${i}`}>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default CardText
