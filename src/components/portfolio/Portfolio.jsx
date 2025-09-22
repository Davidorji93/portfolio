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
              <strong>GoCart</strong> is a multi-vendor e-commerce platform that
              connects multiple sellers with buyers, offering individual
              storefronts, seller dashboards, secure payments,customer reviews
              to help businesses scale online.
            </p>
          </div>
          <h3>Go Cart</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Davidorji93/gocart"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://gocart-zeta.vercel.app/"
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
              <strong>Tomato</strong> is an e-commerce platform where users can
              order snacks and pateries, track orders, and make secure payments.
              There is also an admin dashboard for managing
              orders,deliveries,and products.
            </p>
          </div>
          <h3>Tomato</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Davidorji93/tomato"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://tomato-frontend-1uap.onrender.com"
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
              allowing users to browse, add to cart, and purchase products.There
              is also an admin dashboard for managing orders,deliveries,and
              products.
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
