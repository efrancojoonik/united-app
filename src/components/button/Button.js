/* eslint-disable react/prop-types */
import React from 'react'
import './button.css'

const Button = props => {
  const { onClick, children, secondary } = props
  const typeClass = secondary ? 'button--secondary' : 'button--primary'

  return (
    <button className={`button ${typeClass}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
