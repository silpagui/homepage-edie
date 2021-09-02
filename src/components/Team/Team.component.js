import React from "react";
// import "./Team.styles.css";
import person1SRC from "../../assets/person1.png";
import person2SRC from "../../assets/person2.png";
import person3SRC from "../../assets/person3.png";

export function Team() {
  return (
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
  );
}
