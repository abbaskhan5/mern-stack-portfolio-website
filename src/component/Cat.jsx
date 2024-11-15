import React from 'react';
import backgroundvideo from './video/backgroundvid2.mp4'

const CTASection = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundvideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Your next starts right here
          </h2>
          <p className="text-2xl text-white mb-8 max-w-2xl mx-auto ">
            Join us in shaping the future of digital transformation
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 border-8">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;