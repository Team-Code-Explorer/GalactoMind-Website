import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>GalactoMind AGI</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>GalactoMind, the visionary creation of Code Explorer, represents a groundbreaking leap in artificial general intelligence. With universal understanding and cosmic problem-solving, it envisions a transformative future for humanity.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;