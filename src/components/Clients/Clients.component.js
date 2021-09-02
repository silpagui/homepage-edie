import React from "react";
// import "./Clients.styles.css";

import person4SRC from "../../assets/person4.png";

export function Clients() {
  return (
    <section className="reviews-section central-wrapper central-page-alignment">
      <p className="title">
        “Fast and outstanding resutls. Edie understands their customer’s needs.
        They have a young and talented team.”
      </p>
      <div className="review-client" id="clients">
        <img className="client" src={person4SRC} alt="client" />
        <div>
          <h4 className="review-client__title">Carlos Tran</h4>
          <span className="review-client__description">
            The Decorate Gatsby
          </span>
        </div>
      </div>
    </section>
  );
}
