import React from 'react'
import './styles.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
<section id="experience">
 <h5>The Skills I have</h5>
 <h2>My Experience</h2>
 <div className="container experience__container">
  <div className="experience__frontend">
    <h3>Frontend Development</h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>CSS</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>TailwindCss</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>BootStrap</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>VueJS</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
      <div>
      <h4>React</h4>
        <small className='text-light'>Experienced</small>
      </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
      <div>
      <h4>Redux</h4>
        <small className='text-light'>Experienced</small>
      </div>
      </article>
    </div>
  </div>

  <div className="experience__backend">
  <h3>Backend Development</h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>Java</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>NodeJS</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>PHP</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>Python</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>Spring Boot</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>ExpressJS</h4>
        <small className='text-light'>Experienced</small>
       </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
      <div>
      <h4>PostgreSQL</h4>
        <small className='text-light'>Intermediate</small>
      </div>
      </article>

      <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Hiberate</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>
    </div>
  </div>
 </div>
</section>
  )
}

export default Experience
