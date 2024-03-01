// import React from 'react';
import Lottie from 'lottie-react';
import heroAnimation from '../../../public/animation/laptop.json';
import './Hero.css';
import { useRef } from 'react';

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <img src="my-icon.png" alt="my avatar" className="avatar" />
        <span className="icon-verified"></span>
        <div className="heroContent">
          <h1 className="title">
            {' '}
            Web Developer, Frontend Engineer, and Full Stack Developer
          </h1>
          <p className="sub-title">
            I`m Shady, a highly motivated and dedicated professional with
            extensive experience in web development living in Egypt.
          </p>

          <div className="icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin-square"></div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <Lottie
          lottieRef={lottieRef}
          animationData={heroAnimation}
          className="hero-animation"
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
