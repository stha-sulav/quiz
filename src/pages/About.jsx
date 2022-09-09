import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About the Game</h2>
      <ul className="about-content">
        <li className="point">
          Player is asked 10 questions, 1 question at a time.
        </li>
        <li className="point">
          Player is rewarded 1 point on correct answer on given question.{" "}
        </li>
        <li className="point">Player can restart the game after round 1.</li>
        <li className="point">
          If restarted the point and round get default to 0 and 1 respectively.
        </li>
        <li className="point">
          <a href="https://google.com" className="link" target="_blank">
            Click here
          </a>{" "}
          for source code.
        </li>
      </ul>
      <Link to="/" className="link">
        <Buttons name={"Go back to Home"} />
      </Link>
    </section>
  );
};

export default About;
