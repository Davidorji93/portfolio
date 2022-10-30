import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/david-orji-159344117/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Davidorji93" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/orjidavid.edwin/" target="_blank" rel="noreferrer"><BsFacebook/></a>
      
    </div>
  )
}

export default HeaderSocials
