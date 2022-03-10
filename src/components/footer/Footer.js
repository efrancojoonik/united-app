import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content content-wrapper'>
        <p>© 2021 United Airlines</p>
        <p>
          Powered by <span className='footer__highlight-text'>SIMPLENIGHT</span>
        </p>
        <p>Policy & Agreement | Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
