import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/the_boat.mp4' autoPlay loop muted />
      <div className="img-profile">
      <img src="images/profile_photo.jpeg" className="rounded-circle profile_style" alt="anushka"/>
      </div>
      <h1>ANUSHKA SINGH</h1>
      <p>Hi! I’m Anushka Singh, a Software Engineer at Clodura with a Bachelor’s degree from IIT Kharagpur (ranked among the top 4 universities in India).

I specialize in Full-Stack Development (Frontend + Backend) and Deep Learning, with a strong focus on Large Language Models (LLMs).

I’m actively seeking Software Engineering opportunities where I can apply my skills, contribute meaningfully, and stay productive while working on impactful projects.</p>
     
    </div>
  );
}

export default HeroSection;
