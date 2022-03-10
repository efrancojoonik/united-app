/* eslint-disable react/prop-types */
import React from 'react'
import './tabs.css'

const TabHeader = ({ tabs }) => {
  const _active = tabIndex => {
    const activeTab = 0
    if (tabIndex === activeTab) return 'active'
  }
  return (
    <ul className='tab-header'>
      {tabs.map((tab, i) => (
        <li className={`tab-header__item ${_active(i)}`} key={`tab${i}`}>
          <span className='tab-header__text'>{tab}</span>
        </li>
      ))}
      <span className='tab-header__indicator' />
    </ul>
  )
}

export default TabHeader
