/* eslint-disable react/prop-types */
import ItemTitle from 'components/item-title/ItemTitle'
import React from 'react'
import './inputField.css'

const InputField = props => {
  const { label, type, icon } = props
  return (
    <div className='field'>
      <ItemTitle>{label}</ItemTitle>
      <div className='field__input-container'>
        <input type={type} {...props} className='field__input' />
        <div className='field__icon-container'>
        <img src={icon} className='field__icon' />
        </div>
      </div>
    </div>
  )
}

export default InputField
