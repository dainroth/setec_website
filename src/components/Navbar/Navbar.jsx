import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
// import { Link } from 'react-scroll';
import { Link, Links } from 'react-router-dom';

function Navbar() {

// when we scroll down, it become ture and when it is true, it;s will apply that dark navbar style
  const [sticky, setSticky] = useState(false);

  // this function will be executed when the component is loaded
  useEffect(()=>{
      window.addEventListener('scroll', () => {
    
        // so this value will value the scroll position from the top of the page. if it less than 50 the sticky will be flase
          // the ":" is like if and else funtion

        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[]);

  return (
    
    // adding some logic for the dark nav mode
    // when you tey to scroll down, we want the navbar to go with you and become dark
   <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <Link to="/"><img src={logo} alt="" className='logo' /></Link>
        <ul>
          {/*applying react scroll!  to = target */}
          {/* when we are adding the target so we need to add the value into the name properties in program.jsx */}
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            <Link to="/about">About</Link>
            
        </ul>
      
    </nav>
    
  )
}

export default Navbar