/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css";

const Portfolio = () => {
  return (
    <section id="porfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-description">
            <p>
              <strong>Magni Ventures</strong> is a web application that allows
              users to book flights and hotel reservations seamlessly, offering
              a smooth travel planning experience.
            </p>
          </div>
          <h3>Magni Ventures</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" rel="noreferrer">
              Github
            </a>
            <a
              href="https://magniventures.org/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-description">
            <p>
              <strong>Zuri Africa</strong> is an e-commerce platform where users
              can order clothing, customize their brand, track orders, and make
              secure payments.
            </p>
          </div>
          <h3>Zuri Africa</h3>
          <div className="portfolio__item-cta">
            <a href="#" target="_blank" className="btn" rel="noreferrer">
              Github
            </a>
            <a
              href="https://zuriafrica.com/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-description">
            <p>
              <strong>Quickcart App</strong> is an e-commerce web application
              allowing users to browse, add to cart, and purchase products.
              
            </p>
          </div>
          <h3>Quickcart App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Davidorji93/quickcart"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://quickcart-tau.vercel.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-description">
            <p>
              <strong>Medicare App</strong> is a healthtech platform where
              patients can search for doctors, view profiles, and book
              appointments.
            </p>
          </div>
          <h3>Medicare App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Davidorji93/medicare"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://medicare-frontend-iqgc.onrender.com/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-description">
            <p>
              <strong>Vawulens App</strong> is a social feedback app where users
              can report, vote, and discuss anonymous observations. Developed
              using React and Firebase.
            </p>
          </div>
          <h3>Vawulens App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Davidorji93/Vawulens"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://vawulens-app.netlify.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

// import React from "react";
// import "./styles.css";
// import { FaGooglePlay, FaApple } from "react-icons/fa";

// const Portfolio = () => {
//   const projects = [
//     {
//       title: "Kredi Bank App",
//       description:
//         "A digital bank providing savings, loans, and financial services in Nigeria and other countries.",
//       playStore: "https://play.google.com/store/apps/details?id=com.kredibank",
//       appStore:
//         "https://apps.apple.com/ng/app/kredi-bank-loans-and-savings/id1524201515",
//     },
//     {
//       title: "Payvice App",
//       description:
//         "Payvice App is a secure, fast, and easy-to-use payment platform for sending, receiving, and managing money anytime, anywhere.",
//       playStore:
//         "https://play.google.com/store/apps/details?id=com.iisysgroup.payviceagents",
//       appStore: "https://apps.apple.com/ng/app/payvice-agents/id1634955295",
//     },
//     {
//       title: "EasySpend App",
//       description:
//         "EasySpend App is a digital wallet for fast, secure money transfers, airtime purchases, and bill payments, simplifying everyday financial transactions.",
//       playStore:
//         "https://play.google.com/store/apps/details?id=com.tocata.easyspend",
//       appStore: "https://apps.apple.com/ng/app/easyspend/id6599855396",
//     },
//   ];

//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {projects.map(({ title, description, playStore, appStore }, index) => (
//           <article className="portfolio__item" key={index}>
//             <h3>{title}</h3>
//             <p>{description}</p>
//             <div className="portfolio__item-cta">
//               <a
//                 href={playStore}
//                 className="btn btn-primary"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaGooglePlay style={{ marginRight: "0.5rem" }} />
//                 Play Store
//               </a>
//               <a
//                 href={appStore}
//                 className="btn"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaApple style={{ marginRight: "0.5rem" }} />
//                 App Store
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
