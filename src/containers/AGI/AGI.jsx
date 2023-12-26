import React from "react";
import Feature from "../../components/feature/Feature";
import "./AGI.css";

const AGI = () => (
  <div className="gpt3__whatgpt3 section__margin" id="agi">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is AGI"
        text="Artificial General Intelligence (AGI) refers to a form of artificial intelligence that possesses human-like cognitive abilities, demonstrating understanding and competence across diverse tasks without specific programming. AGI aims to emulate human intelligence, enabling machines to learn, reason, and adapt to various scenarios, exhibiting a broad range of intellectual capabilities."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Multimodel Generative AGI"
        text="Multimodal Generative AGI combines diverse data sources to create a comprehensive and adaptive artificial intelligence capable of multifaceted understanding."
      />
      <Feature
        title="Knowledge Base of AGI"
        text="AGI's knowledge base encompasses a vast repository of information, enabling adaptive learning, problem-solving, and a nuanced understanding of various domains."
      />
      <Feature
        title="Research On AGI"
        text="Ongoing AGI research focuses on refining algorithms, ethical considerations, and expanding capabilities for artificial intelligence's broader understanding and application."
      />
    </div>
  </div>
);

export default AGI;
