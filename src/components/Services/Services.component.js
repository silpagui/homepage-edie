import React from "react";
// import "./Services.styles.css";
import pencilSRC from "../../assets/pencil.svg";
import backendSRC from "../../assets/backend.svg";
import bracketsSRC from "../../assets/brackets.svg";

export function Services() {
  return (
    <section
      className="services-section central-wrapper central-page-alignment"
      id="services"
    >
      <h2 className="title ">We offer high demand services</h2>
      <ul className="services-section__services">
        <li className="service service__1">
          <img src={pencilSRC} alt="service" />
          <h3 className="service__title">UI/UX Design</h3>
          <p className="service__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="button">Get Started</button>
        </li>
        <li className="service service__2">
          <img src={bracketsSRC} alt="service" />
          <h3 className="service__title">Front End</h3>
          <p className="service__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="button">Get Started</button>
        </li>
        <li className="service service__3">
          <img src={backendSRC} alt="service" />
          <h3 className="service__title">Back End</h3>
          <p className="service__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="button">Get Started</button>
        </li>
      </ul>
    </section>
  );
}
