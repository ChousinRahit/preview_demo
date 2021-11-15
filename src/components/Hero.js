import React from 'react';
// JSX
import HeroSlider, { Slide, Nav, AutoplayButton } from 'hero-slider';
import one_1 from '../assets/img/one_1.jpg';
import one_2 from '../assets/img/one_2.jpg';
import one_3 from '../assets/img/one_3.jpg';

// Images

const tenryuJiTemple = one_1;
const hakone = one_3;
const byodoInTemple = one_2;

const Hero = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      set
      initialSlide={1}
      style={{
        backgroundColor: '#000',
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          pointerEvents: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            padding: 0,
            textTransform: 'uppercase',
            width: '90%',
            textAlign: 'center',
            fontSize: '3.5rem',
          }}
        >
          Autoplay Button Slider
        </div>
      </div>
      <AutoplayButton />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: tenryuJiTemple,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: hakone,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: byodoInTemple,
          backgroundAnimation: 'fade',
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default Hero;
