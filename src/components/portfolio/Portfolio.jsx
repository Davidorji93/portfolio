import React from 'react'
import './styles.css'
import IMG from '../../assets/akpego.png'
import IMG2 from '../../assets/preview.png'
import IMG3 from '../../assets/home.jpeg'
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
      <img src={IMG2} alt="" />
    </div>
    <h3>Berotot App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/BEROTOT" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://berotot-app.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      <img src={IMG3} alt="" />
    </div>
    <h3>Wakacast App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Wakacast/wakacast-web" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://www.wakacast.com/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
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
