import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Bar-Ilan University</h3>
          <p className="text-gray-300 text-sm">
            Leading academic institution committed to excellence in education and research.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#admission" className="text-gray-300 hover:text-white">Admission Requirements</a></li>
            <li><a href="#programs" className="text-gray-300 hover:text-white">Academic Programs</a></li>
            <li><a href="#campus" className="text-gray-300 hover:text-white">Campus Life</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
            <li><a href="#technical" className="text-gray-300 hover:text-white">Technical Support</a></li>
            <li><a href="#accessibility" className="text-gray-300 hover:text-white">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
        <p>&copy; 2024 Bar-Ilan University. All rights reserved. | BiuReg.com Registration Portal</p>
      </div>
    </footer>
  );
};