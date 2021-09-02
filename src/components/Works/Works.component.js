import React from "react";
// import "./Works.styles.css";

import smartSRC from "../../assets/smarthome.jpg";
import bookingSRC from "../../assets/booking.png";
import onboardSRC from "../../assets/onboard.png";
import juiceSRC from "../../assets/juice-product.png";

export function Works() {
  return (
    <section
      className="work-section central-wrapper central-page-alignment"
      id="our-work"
    >
      <h2 className="title">Good design means good business</h2>
      <div className="works">
        <div className="works__item">
          <img src={smartSRC} alt="smartHome" />
          <span className="item-highlight">Full stack application</span>
          <h3 className="item-title">Smart home dashboard</h3>
        </div>
        <div className="works__item work-position">
          <img src={onboardSRC} alt="smartHome" />
          <span className="item-highlight">UX/UI design</span>
          <h3 className="item-title">Onboard application</h3>
        </div>
        <div className="works__item ">
          <img src={bookingSRC} alt="smartHome" />
          <span className="item-highlight">Mobile application</span>
          <h3 className="item-title">Booking system</h3>
        </div>

        <div className="works__item work-position">
          <img src={juiceSRC} alt="smartHome" />
          <span className="item-highlight">Front End application</span>
          <h3 className="item-title">Juice product homepage</h3>
        </div>
      </div>
      <div className="work-section__more">
        <a href="#/">see more</a>
        <svg
          width="16"
          height="7"
          viewBox="0 0 100 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.36 1.04998C68.7461 0.485887 67.9529 0.156546 67.12 0.119982C66.7215 0.103001 66.3238 0.168978 65.9522 0.313734C65.5805 0.45849 65.243 0.678868 64.9609 0.960903C64.6789 1.24294 64.4585 1.58048 64.3138 1.95214C64.169 2.32381 64.103 2.72149 64.12 3.11998V21H0V45H64.13V62.89C64.13 63.6856 64.4461 64.4487 65.0087 65.0113C65.5713 65.5739 66.3343 65.89 67.13 65.89C67.5286 65.8956 67.924 65.8195 68.2921 65.6664C68.6601 65.5133 68.9929 65.2865 69.27 65L99.16 35.15C99.7004 34.5644 100.001 33.7968 100.001 33C100.001 32.2031 99.7004 31.4355 99.16 30.85L69.36 1.04998Z"
            fill="#2D9CDB"
          />
        </svg>
      </div>
    </section>
  );
}
