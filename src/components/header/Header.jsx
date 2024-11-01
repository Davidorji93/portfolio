import React from 'react'
import './styles.css'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
 <header>
  <div className="container header__container">
    <h5>Hello, I'm</h5>
    <h1>David Orji</h1>
    <h5 className="text-light">Full Stack Software Engineer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className="me">
      <img src={ME} alt="" />
    </div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
  </div>
 </header>
  )
}

export default Header
