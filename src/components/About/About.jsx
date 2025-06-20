import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>

        <div className="about-right">
            <h3>ABOUT INSTITUTE</h3>
            <h2>Begin Your Education With Us, End With Job Opportunity</h2>
            <p>
                SETEC continues to become a leading private establishment in 
                providing tertiary education in Information Technology and Design in Cambodia and promote quality in 
                education, management, researches and services to an international standard. 
            </p>
            <p>
                In order to achieve its vision, SETEC educates and trains students to attain quality of knowledge and ethical values. 
                This will assist them in grasping the job opportunities. To this end SETEC focuses on staff and teacher development, student services, 
                curriculum modernization and facility improvement. 
            </p>
            <p>
                SETEC is committed to providing quality education and training to students in order to prepare them for the job market. 
                The institute is dedicated to promoting a culture of excellence in education and research, and to fostering a spirit of innovation and creativity among its students.
            </p>
        </div>
    </div>
  )
}

export default About