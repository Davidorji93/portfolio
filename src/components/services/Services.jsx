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
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I collaborate with the backend team and web designers to Improve
                usability and scalibilty
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expand features,refine code and improve processes,producing
                smoother operations and enhancing user engagement.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>I help the backend team to debug and troubleshoot</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I work with the backend team to integrate UI with APIs and
                databases.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designed dynamic and browser compaatible pages using react and
                other frontend framework and tools.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I stay plugged in emerging technologies and industry trends.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design the architecture of the application's services.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Built part of application layers such as the controllers, DAO,
                Services, Docker and Kubernetes script.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshooting application and code issues.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating data storage solutions.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development of cloud-hosted web applications and REST APIs using
                frameworks like Springboot and others
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I stay plugged in emerging technologies and industry trends.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>System Integration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I Provide technical support to employees who use company
                computers or devices
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I coordinate with internal software developers to ensure that
                new applications meet business requirements
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Supervising network administration staff to ensure that servers
                are backed up regularly and that performance issues are
                addressed promptly
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>I manage CyberSecurity</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Participating in weekly team meetings to discuss progress on
                projects and identify potential problems that may arise
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I stay plugged in emerging technologies and industry trends.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
