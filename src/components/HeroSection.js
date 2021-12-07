import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

    <video src='/videos/Astartes.mp4' autoPlay loop muted />
      <h1>In the grim darkness of the far future there is only war</h1>

      <div className='hero-btns'>
        <Button className='btn btn--primary btn--large' buttonStyle='btn--outline' buttonSize='btn--large'>
          Sign Up
        </Button>

        <a href="https://www.youtube.com/embed/B9V0bOB8sXQ">
          <button className='btn btn--primary btn--large' buttonStyle='btn--primary' buttonSize='btn--large'>
            Watch Trailer
            <i className='far fa-play-circle' />
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;

/*import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div classname='hero-contanier'>
         <video src='/video/video-2.mp4' autoPlay loop muted />
         <h1>Adventure awaits</h1>
         <p>What are you waiting for?</p>
         <div>
             <Button classname='btns' ButtonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
             <Button classname='btns' ButtonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
             Watch trailer <i classname='far fa-play-circle' />
         </div>
        </div>
    )
}

export default HeroSection */
