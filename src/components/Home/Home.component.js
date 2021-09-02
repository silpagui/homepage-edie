import React from "react";
// import "./Home.styles.css";

import heroSRC from "../../assets/heroImage.jpg";

export function Home() {
  return (
    <section className="home central-page-alignment" id="home">
      <div className="central-col-alignment">
        <span className="home__highlight">Unhappy with your website?</span>
        <h2 className="home__title">
          We create beautiful and fast web services
        </h2>
      </div>
      <img src={heroSRC} alt="heroImage" className="heroImage" />
      <div className="home-description central-col-alignment">
        <article className="article-alignment">
          <h2 className="home-description__title">
            Story, emotion and purpose
          </h2>
          <p className="home-description__text">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <label htmlFor="contact" className="contact__highlight">
            Want us to contact you?
          </label>
          <form className="contact__form">
            <input type="email" id="contact" placeholder="Email" />
            <button className="button" type="button">
              Join
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
