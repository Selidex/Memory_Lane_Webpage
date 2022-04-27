import React from 'react';
// import Video from "../assets/Video/HeroVideo.mov"
const Hero = () => {
  return (
    <div className="hero min-h-screen HeroSection">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Memory Lane</h1>
          <p className="mb-5">
            A new way to memorize important information using VR as a tool.
          </p>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
    // <video id="background-video" autoplay loop muted poster='../assets/Video/HeroVideo.mov' width="320" height="240">
    //   <source src={} type="video/mov"/>
    // </video>
  );
};

export default Hero;
