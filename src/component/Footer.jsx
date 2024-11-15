import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Digital</a></li>
              <li><a href="#" className="hover:text-secondary">Data & AI</a></li>
              <li><a href="#" className="hover:text-secondary">Cloud</a></li>
              <li><a href="#" className="hover:text-secondary">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Financial Services</a></li>
              <li><a href="#" className="hover:text-secondary">Healthcare</a></li>
              <li><a href="#" className="hover:text-secondary">Technology</a></li>
              <li><a href="#" className="hover:text-secondary">Manufacturing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">About Us</a></li>
              <li><a href="#" className="hover:text-secondary">Careers</a></li>
              <li><a href="#" className="hover:text-secondary">Contact</a></li>
              <li><a href="#" className="hover:text-secondary">News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-secondary"
              />
              <button className="w-full bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Company. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;