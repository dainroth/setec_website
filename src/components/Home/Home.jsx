import React from 'react'
import TItle from '../TItle/TItle'
import About from '../About/About'
import Campus from '../Campus/Campus'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import Programs from '../Programs/programs'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

function Home() {
  return (
    <>
    <Hero/>
    <div className="container">
        {/* so around here we will pass the props */}
        <TItle subTitle='OUR PROGRAM' title='What we offer'/>
        <Programs/>
        <About/>
         <TItle subTitle='Gallary' title='Campus Photos'/>
        <Campus/>
         <TItle subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial/>
         <TItle subTitle='Contact Us' title='Get in Touch '/>
        <Contact/>
      
      </div>
    </>
  )
}

export default Home