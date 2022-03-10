import images from 'assets/images'
import React from 'react'
import './navbar.css'
import NavItem from './NavItem'

const HeaderNavbar = () => {
  const links = [
    {
      title: 'Categories',
      drop: true
    },
    {
      title: 'ENG',
      drop: true
    },
    {
      title: 'USD $'
    },
    {
      title: 'Itinerary'
    }
  ]
  return (
    <header className='header'>
      <div className='header-line-black' />
      <nav className='header-nav'>
        <div className='content-wrapper header-nav__content'>
        <picture className='header-nav__logo-container'>
          <a>
            <img src={images.logo} />
          </a>
        </picture>
        <ul className='header-nav__items'>
          {links.map((link, i) => (
            <NavItem key={`li${i}`} title = {link.title} drop={link.drop} />
          ))}
           <NavItem src={images.shoppingCart} />
           <NavItem src={images.userProfile} />
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default HeaderNavbar
