/* eslint-disable react/prop-types */
import ArrowDownSvg from 'assets/svg/ArrowDownSvg'
import React from 'react'

const NavItem = ({ title, onClick, src, drop }) => {
  return (
    <li className='header-nav__item-container'>
      <button className='header-nav__item' onClick={onClick}>
        {src ? <img src={src} /> : title}
        {drop && (
          <span className='header-nav__item-arrow'>
            <ArrowDownSvg />
          </span>
        )}
      </button>
    </li>
  )
}

export default NavItem
