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
      <h1>Hello, I'm Mohit Singh Budal</h1>
      <p>Creative Developer & Designer</p>
      <button className="cta" onClick={scrollToProjects}>View Projects</button>
      <h5>Scroll Down ... !</h5>
    </section>
  );
};


export default Hero;
