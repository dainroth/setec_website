import React from 'react'
import './Footer.css'

function Footer() {
  return (
    // using react scroll to scroll to the top of the page
    <div className="container">
      <div className='footer'>
          <p>© 2024 Edusity. All rights reserved.</p>
          <ul>
              <li>Term of service</li>
              <li>Privacy Policy</li>
          </ul>
      </div>
    </div>
  )
}

export default Footer