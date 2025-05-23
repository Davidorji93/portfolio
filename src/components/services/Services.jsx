import React from "react";
import "./styles.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Flutter App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build cross-platform mobile apps for Android and iOS using Flutter.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure responsive, performant UI with Flutter widgets and animations.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate REST APIs and cloud services like Firebase and Supabase.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Apply clean architecture principles using BLoC, Riverpod, and Provider.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize app performance and reduce build size for production.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Keep up with latest Flutter and Dart features and best practices.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile Backend Integration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and integrate RESTful APIs with Flutter apps.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Use Firebase for authentication, Firestore, real-time DB, and cloud functions.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Setup push notifications using Firebase Cloud Messaging (FCM).</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement secure local storage and offline capabilities.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop scalable cloud-hosted backends for mobile apps.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Stay updated with backend tools and mobile integration trends.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Deployment & Support</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy apps to Google Play Store and Apple App Store.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure apps meet all publishing requirements and guidelines.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitor app performance and crash analytics post-deployment.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide regular updates and maintenance for released apps.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Support CI/CD workflows using tools like Codemagic or GitHub Actions.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Stay current on mobile OS updates and their impact on apps.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
