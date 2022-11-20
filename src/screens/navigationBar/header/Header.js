import React from 'react';
import './header.css'
import Typed from 'react-typed';

function Header() {
  return (
    <div className='main-info'>
      <h1>What am I?</h1>
      <Typed 
        strings={[
            '',
            'A Front-End Developer',
            'A Back-End Developer',
            'A Software Engineer',
            '', '']}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}

export default Header
