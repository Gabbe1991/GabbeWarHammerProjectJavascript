import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
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
