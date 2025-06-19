import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h1>Hello, I'm Your Name</h1>
      <p>Creative Developer & Designer</p>
      <button className="cta" onClick={scrollToProjects}>View Projects</button>
    </section>
  );
};


export default Hero;