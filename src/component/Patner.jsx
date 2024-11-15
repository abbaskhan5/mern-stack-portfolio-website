import React from 'react';
import logo1 from '../images/image.png'
import logo2 from '../images/logo2.jfif'
import logo3 from '../images/logo3.jfif'
import logo4 from '../images/logo4.jfif'
import logo5 from '../images/logo5.jfif'

const partners = [
  { name: "Salesforce", logo: logo1},
  { name: "Cloudera", logo: logo2},
  { name: "Microsoft", logo: logo3 },
  { name: "AWS", logo: logo4 },
  { name: "Google", logo: logo5 },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-primary mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;