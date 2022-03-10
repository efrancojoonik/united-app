/* eslint-disable react/prop-types */
import React from 'react'
import HeaderNavbar from 'components/header-navbar/HeaderNavbar'
import Footer from 'components/footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <HeaderNavbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
