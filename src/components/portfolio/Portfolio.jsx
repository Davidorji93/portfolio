// import React from 'react'
// import './styles.css'
// import IMG2 from '../../assets/preview.png'
// import IMG3 from '../../assets/home.jpeg'
// import IMG4 from '../../assets/preview-plantex.png'
// import IMG5 from '../../assets/pages.webp'
// import IMG6 from '../../assets/thumbnail.jpg'

// const Portfolio = () => {
//   return (
//  <section id="porfolio">
// <h5>My Recent Work</h5>
// <h2>Portfolio</h2>

// <div className="container portfolio__container">

// <article className="portfolio__item">
//     <div className="portfolio__item-img">
//       <img src={IMG5} alt="" />
//     </div>
//     <h3>Multimart App</h3>
//     <div className="portfolio__item-cta">
//     <a href="https://github.com/Davidorji93/Multimart" target="_blank" className='btn' rel="noreferrer">Github</a>
//     <a href="https://multimart-app.netlify.app/home"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
//     </div>
//   </article>

//   <article className="portfolio__item">
//     <div className="portfolio__item-img">
//       <img src={IMG2} alt="" />
//     </div>
//     <h3>Berotot App</h3>
//     <div className="portfolio__item-cta">
//     <a href="https://github.com/Davidorji93/BEROTOT" target="_blank" className='btn' rel="noreferrer">Github</a>
//     <a href="https://berotot-app.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
//     </div>
//   </article>

//   <article className="portfolio__item">
//     <div className="portfolio__item-img">
//       <img src={IMG3} alt="" />
//     </div>
//     <h3>Wakacast App</h3>
//     <div className="portfolio__item-cta">
//     <a href="https://github.com/Wakacast/wakacast-web" target="_blank" className='btn' rel="noreferrer">Github</a>
//     <a href="https://www.wakacast.com/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
//     </div>
//   </article>

//   <article className="portfolio__item">
//     <div className="portfolio__item-img">
//       <img src={IMG4} alt="" />
//     </div>
//     <h3>Plantex App</h3>
//     <div className="portfolio__item-cta">
//     <a href="https://github.com/Davidorji93/Plantex" target="_blank" className='btn' rel="noreferrer">Github</a>
//     <a href="https://plantex-web.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
//     </div>
//   </article>

//   <article className="portfolio__item">
//     <div className="portfolio__item-img">
//       <img src={IMG6} alt="" />
//     </div>
//     <h3>Vawulens App</h3>
//     <div className="portfolio__item-cta">
//     <a href="https://github.com/Davidorji93/Vawulens" target="_blank" className='btn' rel="noreferrer">Github</a>
//     <a href="https://vawulens-app.netlify.app/"  target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
//     </div>
//   </article>

// </div>
//  </section>
//   )
// }

// export default Portfolio;

import React from "react";
import "./styles.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Kredi Bank App",
      description:
        "A digital bank providing savings, loans, and financial services in Nigeria and other countries.",
      playStore: "https://play.google.com/store/apps/details?id=com.kredibank",
      appStore:
        "https://apps.apple.com/ng/app/kredi-bank-loans-and-savings/id1524201515",
    },
    {
      title: "Payvice App",
      description:
        "Payvice App is a secure, fast, and easy-to-use payment platform for sending, receiving, and managing money anytime, anywhere.",
      playStore:
        "https://play.google.com/store/apps/details?id=com.iisysgroup.payviceagents",
      appStore: "https://apps.apple.com/ng/app/payvice-agents/id1634955295",
    },
    {
      title: "EasySpend App",
      description:
        "EasySpend App is a digital wallet for fast, secure money transfers, airtime purchases, and bill payments, simplifying everyday financial transactions.",
      playStore:
        "https://play.google.com/store/apps/details?id=com.tocata.easyspend",
      appStore: "https://apps.apple.com/ng/app/easyspend/id6599855396",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ title, description, playStore, appStore }, index) => (
          <article className="portfolio__item" key={index}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
              <a
                href={playStore}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <FaGooglePlay style={{ marginRight: "0.5rem" }} />
                Play Store
              </a>
              <a
                href={appStore}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <FaApple style={{ marginRight: "0.5rem" }} />
                App Store
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
