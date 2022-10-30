import React from 'react'
import './styles.css'
import IMG from '../../assets/akpego.png'
import IMG6 from '../../assets/page.png'

const Portfolio = () => {
  return (
 <section id="porfolio">
<h5>My Recent Work</h5>
<h2>Portfolio</h2>

<div className="container portfolio__container">
  <article className="portfolio__item">
    <div className="portfolio__item-img">
      <img src={IMG} alt="" />
      
    </div>
    <h3>Akpego App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/nerdyeye/dwallit" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://dwallit.herokuapp.com/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      
    </div>
    <h3>Fitnesso App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/FitnessoApp-Frontend" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://fitnessoapp1.web.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      
    </div>
    <h3>Chomp App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/ChompApp-frontend" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://62bb0ae2e58d5017d4aef0b1--vocal-semolina-7cc3dd.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      
    </div>
    <h3>Akpego App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/nerdyeye/dwallit" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://dwallit.herokuapp.com/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      <img src={IMG6} alt="" />
    </div>
    <h3>Product Website</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/Product-Website" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://porduct-website.netlify.app"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      
    </div>
    <h3>State Website</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/Stated-website" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="stated-website.netlify.app"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>
</div>
 </section>
  )
}

export default Portfolio;
