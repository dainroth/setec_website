import React from 'react'
import'./Hero.css'
import dark_arrrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>We Ensure better education for a better world.</h1>
        <p>
            At SETEC INSTITUTE, we conduct up-to-date degree programs to equip our students with skills that companies nowadays are looking for. Other then designing the programs with important Management units like Public Relations, Marketing and Accounting, we also place emphasis on Business English.
        
        </p>
        <button className='btn'>Explore More <img src={dark_arrrow} alt="" /></button>
        </div>    
    </div>
  )
}

export default Hero