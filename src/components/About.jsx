import React from 'react';
import profilepic from '../assests/mohit singh budal.jpg'
const About = () => {
  return (
    <section className="about">
      <img src={profilepic} alt="Profile" />
      <div>
        <h2>About Me</h2>
        <p>I’m a frontend developer who genuinely enjoys creating clean, functional, and beautiful user experiences. To me, the best designs are simple, intuitive, and made with people in mind.
          I work well with others and really value clear communication — being part of a team helps me grow and brings out my best work. I’m a quick learner and always excited to dive into new tools and ideas. Whether starting fresh or refining an existing project, I bring creativity, focus, and a problem-solving attitude to everything I do.
          More than just writing code, I believe in building things that truly matter, and I’m always striving to learn and improve along the way.</p>
      </div>
    </section>
  );
};

export default About;