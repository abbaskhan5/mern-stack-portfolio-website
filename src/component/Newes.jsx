import React from 'react';
import { Award } from 'lucide-react';

const NewsSection = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-secondary" />
            <span className="text-secondary font-semibold">Latest Achievement</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Recognized as Industry Leader in Digital Transformation
          </h2>
          <p className="text-black text-lg mb-6">
            Our commitment to excellence and innovation has earned us top recognition in the industry. We continue to push boundaries and deliver exceptional results for our clients worldwide.
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-black px-6 py-2 rounded-full transition-all transform hover:scale-105">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;