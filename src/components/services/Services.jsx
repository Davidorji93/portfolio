import React from "react";
import "./styles.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* React/Next.js Development */}
        <article className="service">
          <div className="service__head">
            <h3>React & Next.js Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build fast, scalable web applications using React and Next.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop SSR (Server-Side Rendered) and SSG (Static Site Generated) apps with Next.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement reusable components and efficient state management with Redux or Zustand.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure responsive and accessible UIs across devices and browsers.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate REST and GraphQL APIs with Axios or Apollo Client.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use React Hooks and best practices for optimized performance and maintainability.</p>
            </li>
          </ul>
        </article>

        {/* Frontend Tools & Styling */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Tools & Styling</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build elegant interfaces using TailwindCSS, SCSS, or styled-components.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement responsive design and mobile-first layouts using Flexbox and Grid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilize TypeScript for type safety and robust component architecture.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Configure and optimize Webpack/Vite for fast development builds.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Manage form validation using React Hook Form or Formik + Yup.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adopt design systems and UI libraries like Material UI, ShadCN, or Ant Design.</p>
            </li>
          </ul>
        </article>

        {/* Deployment & Maintenance */}
        <article className="service">
          <div className="service__head">
            <h3>Deployment & Maintenance</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy apps using platforms like Vercel, Netlify, or Firebase Hosting.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Set up CI/CD pipelines with GitHub Actions for automated deployments.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitor and optimize performance using Lighthouse, Web Vitals, and Sentry.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write unit and integration tests using Jest and React Testing Library.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintain and refactor codebases to keep up with evolving tech stacks.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide post-launch support, updates, and feature enhancements.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
