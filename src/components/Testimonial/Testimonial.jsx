import React, { useRef } from 'react'
import './Testimonial.css'
import naxt_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonial() {
  // adding onclick functionality for next and back buttons
  // next we have to declare the function backward and forward

  // defining the value of the slider aka translate X thing

  const slider = useRef();
    let tx = 0;

  // this is the logic of the forward

  // so when it is 0 it will decrease by 25px, if it reach to -50 it will not decrease anymore
  // cuase we alreadt reach the last list of it
  const slideForward = () => {
    if(tx > -50){
      tx -=25
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    // 
  }


  const sildeBackward = () => {
    //  += is meant by increasing.

    if(tx < 0){
      tx +=25
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }




  return (
    <div className='testimonial'>
      {/* if you click on the button it would execute the slide forward and backward*/}
        <img src={naxt_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={sildeBackward} />

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Kento </h3>
                    <span>Cambodia, PP</span>
                  </div>
                </div>
                <p>SETEC provides a solid foundation in technical and vocational education, offering hands-on training and practical skills that prepare students for real-world careers. 
                  The instructors are knowledgeable, and the programs are designed to meet industry demands. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Neasa</h3>
                    <span>Cambodia, PP</span>
                  </div>
                </div>
                <p>SETEC provides a solid foundation in technical and vocational education, offering hands-on training and practical skills that prepare students for real-world careers. 
                  The instructors are knowledgeable, and the programs are designed to meet industry demands. </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Sery nich</h3>
                    <span>Cambodia, PP</span>
                  </div>
                </div>
                <p>SETEC provides a solid foundation in technical and vocational education, offering hands-on training and practical skills that prepare students for real-world careers. 
                  The instructors are knowledgeable, and the programs are designed to meet industry demands. </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Dara</h3>
                    <span>Cambodia, PP</span>
                  </div>
                </div>
                <p>SETEC provides a solid foundation in technical and vocational education, offering hands-on training and practical skills that prepare students for real-world careers. 
                  The instructors are knowledgeable, and the programs are designed to meet industry demands. </p>
              </div>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default Testimonial