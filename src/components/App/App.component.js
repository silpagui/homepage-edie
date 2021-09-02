import React from "react";
import "./App.styles.css";

import smartSRC from "../../assets/smarthome.jpg";
import bookingSRC from "../../assets/booking.png";
import onboardSRC from "../../assets/onboard.png";
import juiceSRC from "../../assets/juice-product.png";
import person1SRC from "../../assets/person1.png";
import person2SRC from "../../assets/person2.png";
import person3SRC from "../../assets/person3.png";
import person4SRC from "../../assets/person4.png";

import { Header } from "../Header/Header.component";
import { Home } from "../Home/Home.component";
import { Services } from "../Services/Services.component";

export function App() {
  return (
    <div>
      {/* TODO: cuando sea mobile hacer burguer nav que se comporte asi https://tympanus.net/Development/OffCanvasMenuEffects/sideslide.html 
      recordar que en esta pagina tienen que aparecer de derecha a izquierda
      */}

      <Header />
      <Home />
      <Services />

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

      <section className="team-section central-wrapper central-page-alignment">
        <div className="team">
          <span className="team__highlight">Meet the team</span>
          <h2 className="title">We are chilled and a laidback team</h2>
          <p className="team-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="team-members">
          <img
            className="team-members__member"
            src={person3SRC}
            alt="team member"
          />
          <div className="team-members__group">
            <img src={person1SRC} alt="team member" />
            <img src={person2SRC} alt="team member" />
          </div>
        </div>
      </section>
      <section className="reviews-section central-wrapper central-page-alignment">
        <p className="title">
          “Fast and outstanding resutls. Edie understands their customer’s
          needs. They have a young and talented team.”
        </p>
        <div className="review-client">
          <img className="client" src={person4SRC} alt="client" />
          <div>
            <h4 className="review-client__title">Carlos Tran</h4>
            <span className="review-client__description">
              The Decorate Gatsby
            </span>
          </div>
        </div>
      </section>
      <footer className="footer " id="footer">
        <div className="footer-alignment">
          <div className="footer__nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#our-work">Our Work</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__social-media">
            <h2>Edie</h2>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M23.0949 1.9064C22.4907 1.30204 21.7667 1 20.9232 1H3.07926C2.23547 1 1.51164 1.30215 0.907288 1.9064C0.303041 2.51048 0.000999451 3.23442 0.000999451 4.07804V21.9218C0.000999451 22.7653 0.302986 23.4894 0.907288 24.0935C1.51164 24.6977 2.23563 25 3.07926 25H20.923C21.7663 25 22.4906 24.6977 23.0948 24.0935C23.6991 23.4894 24.0009 22.7653 24.0009 21.9218V4.07804C24.0008 3.23425 23.6991 2.5107 23.0949 1.9064ZM8.61845 9.64832C9.56108 8.737 10.6939 8.28112 12.0169 8.28112C13.35 8.28112 14.488 8.737 15.4308 9.64832C16.3737 10.5598 16.8448 11.6615 16.8448 12.9531C16.8448 14.2446 16.3737 15.3463 15.4308 16.2575C14.488 17.1692 13.3504 17.625 12.0169 17.625C10.694 17.625 9.56124 17.1688 8.61845 16.2575C7.67561 15.3462 7.20424 14.2446 7.20424 12.9531C7.20424 11.6615 7.67561 10.5599 8.61845 9.64832ZM21.2826 21.2814C21.2826 21.5521 21.1885 21.7785 21.0012 21.9609C20.8133 22.1432 20.5897 22.2343 20.3291 22.2343H3.62621C3.35541 22.2343 3.12868 22.1432 2.94655 21.9609C2.76414 21.7789 2.67302 21.5521 2.67302 21.2814V11.1561H4.87607C4.66784 11.8124 4.56369 12.4948 4.56369 13.203C4.56369 15.2034 5.29277 16.9089 6.75109 18.3206C8.20958 19.7318 9.96475 20.4377 12.0168 20.4377C13.371 20.4377 14.6209 20.1147 15.7671 19.4689C16.913 18.8227 17.8186 17.9453 18.4858 16.8359C19.1525 15.7264 19.4859 14.5154 19.4859 13.203C19.4859 12.4949 19.3813 11.8126 19.1731 11.1561H21.2827V21.2815H21.2826V21.2814ZM21.2826 7.32793C21.2826 7.63002 21.1784 7.88527 20.9697 8.09357C20.7615 8.30202 20.5064 8.40611 20.2042 8.40611H17.4855C17.1836 8.40611 16.9281 8.30197 16.7199 8.09357C16.5116 7.88527 16.4075 7.63002 16.4075 7.32793V4.75004C16.4075 4.45834 16.5116 4.20578 16.7199 3.99217C16.9282 3.77868 17.1836 3.6718 17.4855 3.6718H20.2042C20.5064 3.6718 20.7616 3.77863 20.9697 3.99217C21.1784 4.20578 21.2826 4.45834 21.2826 4.75004V7.32793Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M22.6796 2.32019C21.7998 1.44012 20.7397 1 19.5002 1H4.50013C3.26066 1 2.20059 1.44012 1.32035 2.32019C0.440277 3.20043 0.00015831 4.26044 0.00015831 5.49997V20.4999C0.00015831 21.7393 0.440277 22.7994 1.32035 23.6797C2.20059 24.5599 3.26066 25 4.50013 25H19.5001C20.7395 25 21.7996 24.5599 22.6795 23.6797C23.5597 22.7994 23.9998 21.7394 23.9998 20.4999V5.49997C23.9998 4.26044 23.5596 3.20026 22.6796 2.32019ZM7.31257 21.0936H3.70319V10.2498H7.31257V21.0936ZM6.98465 8.2422C6.60971 8.60159 6.11486 8.78132 5.50022 8.78132H5.48446C4.89077 8.78132 4.40917 8.60159 4.03927 8.2422C3.66931 7.8828 3.48444 7.43754 3.48444 6.9063C3.48444 6.36466 3.67467 5.91666 4.05476 5.56241C4.43511 5.20827 4.92722 5.03112 5.5313 5.03112C6.13544 5.03112 6.61983 5.20827 6.98448 5.56241C7.34902 5.91666 7.53657 6.36466 7.54692 6.9063C7.54686 7.43732 7.35959 7.88258 6.98465 8.2422ZM20.297 21.0936H16.6876V15.2968C16.6876 13.6616 16.0836 12.8438 14.8752 12.8438C14.4169 12.8438 14.0313 12.9714 13.7189 13.2266C13.4062 13.4817 13.1719 13.7916 13.0158 14.1565C12.9428 14.3438 12.9064 14.6354 12.9064 15.0311V21.0935H9.29705C9.3283 14.552 9.3283 10.9373 9.29705 10.2497H12.9064V11.7807C13.6653 10.5941 14.743 9.99961 16.1409 9.99961C17.3909 9.99961 18.3962 10.4112 19.1566 11.2339C19.917 12.0569 20.2972 13.2706 20.2972 14.8743V21.0936H20.297Z"
                  fill="#F2F2F2"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M23.6796 0.320191C22.7998 -0.559882 21.7397 -1 20.5002 -1H5.50013C4.26066 -1 3.20059 -0.559882 2.32035 0.320191C1.44028 1.20043 1.00016 2.26044 1.00016 3.49997V18.4999C1.00016 19.7393 1.44028 20.7994 2.32035 21.6797C3.20059 22.5599 4.26066 23 5.50013 23H20.5001C21.7395 23 22.7996 22.5599 23.6795 21.6797C24.5597 20.7994 24.9998 19.7394 24.9998 18.4999V3.49997C24.9998 2.26044 24.5596 1.20026 23.6796 0.320191ZM19.3595 8.23444C19.3699 8.32819 19.3752 8.46856 19.3752 8.65639C19.3752 9.53143 19.2475 10.409 18.9924 11.289C18.7373 12.1694 18.3466 13.0131 17.8204 13.8204C17.2947 14.6275 16.6671 15.3413 15.938 15.961C15.2087 16.5805 14.3339 17.0756 13.3128 17.4451C12.2922 17.8151 11.1983 18.0002 10.0317 18.0002C8.21937 18.0002 6.5423 17.5103 5.00058 16.5315C5.25057 16.5626 5.51113 16.5783 5.78181 16.5783C7.29229 16.5783 8.65167 16.1096 9.86005 15.1718C9.15182 15.1617 8.5189 14.9431 7.96166 14.5156C7.40426 14.0885 7.01635 13.5469 6.79755 12.8907C7.06829 12.9322 7.27138 12.9529 7.40678 12.9529C7.63592 12.9529 7.90163 12.9113 8.20361 12.8282C7.44323 12.6821 6.8027 12.3049 6.28186 11.6955C5.7609 11.086 5.50051 10.3908 5.50051 9.60958V9.57833C6.05244 9.83856 6.57328 9.97395 7.06293 9.98452C6.11499 9.34897 5.64105 8.43764 5.64105 7.25017C5.64105 6.66677 5.79199 6.11474 6.09409 5.59389C6.91691 6.60438 7.91711 7.41156 9.09403 8.0157C10.2711 8.61978 11.5316 8.95849 12.8753 9.03133C12.8233 8.83343 12.7972 8.58333 12.7972 8.28134C12.7972 7.37495 13.1175 6.60165 13.7582 5.96095C14.3987 5.32031 15.1722 4.99988 16.0783 4.99988C17.0369 4.99988 17.8339 5.34374 18.4692 6.03128C19.188 5.89588 19.8862 5.63012 20.5631 5.23444C20.3028 6.03631 19.8181 6.64576 19.1101 7.06245C19.787 6.96854 20.417 6.79155 21.0002 6.53116C20.5628 7.19779 20.0157 7.76548 19.3595 8.23444Z"
                  fill="#F2F2F2"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="footer__contact">
            <label
              htmlFor="contact-footer"
              className="contact__highlight--footer"
            >
              Want us to contact you?
            </label>
            <form className="contact__form">
              <input type="email" id="contact-footer" placeholder="Email" />
              <button className="button" type="button">
                Join
              </button>
            </form>
          </div>
        </div>
        <p className="copy">
          created by <a href="https://silpagui.github.io/">silpagui</a> -
          devChallenges.io
        </p>
      </footer>
    </div>
  );
}
