import React from 'react'
import './styles.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'




const Footer = () => {
  return (
    <footer>
     <a href="/#" className='footer__logo'>DAVID</a>
     <ul className='permalinks'>
      <li><a href="/#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
      <a href="https://www.facebook.com/orjidavid.edwin/"><FaFacebookF/></a>
      <a href="https://www.instagram.com/orji_david93/"><FiInstagram/></a>
      <a href="https://twitter.com/Davidorji93Orji"><IoLogoTwitter/></a>
     </div>
     <div className="footer__copyright">
      <small>
        &copy; David. All rights reserved
      </small>
     </div>
    </footer>
  )
}

export default Footer
