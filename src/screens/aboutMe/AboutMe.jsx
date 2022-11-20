import React from 'react'
import './aboutMe.css'
import myself from '../../images/myself.jfif'

function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
        <div>
          <img src={myself} alt="myself" />
        </div>
        <div className='about__text'>
            <h1>ABOUT ME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id quos amet saepe neque esse dolorum, molestiae ipsa labore, minima aliquid dolores odio minus quasi ea alias obcaecati sint officiis.</p>
        </div>
    </div>
  )
}

export default AboutMe
