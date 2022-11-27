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
            <p>Enthusiastic web developer eager to contribute to team success through hard work, attention to detail and
excellent organizational skills. As a student in the UNC coding boot camp I've developed numerous applications using both front-end and back-end features. Motivated to learn, grow and excel in software development.</p>
        </div>
    </div>
  )
}

export default AboutMe
