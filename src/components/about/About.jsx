import React from 'react'
import './styles.css'
import DAVID from '../../assets/hero-image.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
  <section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>
  <div className="container about__container">
    <div className="about__me">
      <div className="about__me_img">
        <img src={DAVID} alt="" />
      </div>
    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>5+ Years Working</small>
        </article>

        <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
        </article>

        <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>10+ Completed</small>
        </article>
      </div>

    <p>
    Highly motivated and result-oriented developer and engineer with excellent technical and communication skills. Proficient in using a wide variety of technologies, frameworks, embedded software platforms and tools to provide high quality and scalable applications.
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  </div>
  </section>
  )
}

export default About