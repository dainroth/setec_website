import React from 'react'
import './TItle.css'
// This component displays a title section
const TItle = ({subTitle, title}) => {
  return (
    <div className='title'>
        {/* which mean that thses text are coming as a props so that you dont have to create many compnonts for it */}
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>

    // but instead of writing it here, we will pass it through props. 
    // so that we could use this component in different places with different titles.
  )
}

export default TItle