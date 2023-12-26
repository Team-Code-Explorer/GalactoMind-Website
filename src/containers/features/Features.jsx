import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Interstellar Exploration',
    text: 'GalactoMind pioneers deep-space exploration, analyzing celestial data for unprecedented discoveries, aiding in cosmic research, and fostering interstellar collaboration.',
  },
  {
    title: 'Medical Breakthroughs',
    text: 'Revolutionizing healthcare, GalactoMind accelerates medical research, diagnoses complex diseases, and designs personalized treatments, enhancing global well-being with its advanced cognitive capabilities.',
  },
  {
    title: 'Environmental Sustainability',
    text: 'GalactoMind addresses environmental challenges by optimizing resource allocation, predicting climate patterns, and fostering sustainable practices, contributing to a harmonious coexistence with the cosmos.',
  },
  {
    title: 'Education Revolution',
    text: 'GalactoMind transforms education, adapting learning curricula to individual needs, fostering interdisciplinary understanding, and enabling global collaboration, shaping a future where knowledge transcends earthly boundaries.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Recognize that AGI is here to stay, take bold action today to mold it into something remarkable, and take advantage of the amazing opportunities that come with its revolutionary potential.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;