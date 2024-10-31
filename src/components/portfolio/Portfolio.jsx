import React from 'react'
import './styles.css'
import IMG2 from '../../assets/preview.png'
import IMG3 from '../../assets/home.jpeg'
import IMG4 from '../../assets/preview-plantex.png'
import IMG5 from '../../assets/pages.webp'
import IMG6 from '../../assets/thumbnail.jpg'

const Portfolio = () => {
  return (
 <section id="porfolio">
<h5>My Recent Work</h5>
<h2>Portfolio</h2>

<div className="container portfolio__container">

<article className="portfolio__item">
    <div className="portfolio__item-img">
      <img src={IMG5} alt="" />
    </div>
    <h3>Multimart App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/Multimart" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://multimart-app.netlify.app/home"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
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
      <img src={IMG4} alt="" />
    </div>
    <h3>Plantex App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/Plantex" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://plantex-web.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>

  <article className="portfolio__item">
    <div className="portfolio__item-img">
      <img src={IMG6} alt="" />
    </div>
    <h3>Vawulens App</h3>
    <div className="portfolio__item-cta">
    <a href="https://github.com/Davidorji93/Vawulens" target="_blank" className='btn' rel="noreferrer">Github</a>
    <a href="https://vawulens-app.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
    </div>
  </article>


</div>
 </section>
  )
}

export default Portfolio;
