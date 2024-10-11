import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTryForFree = () => {
    navigate('/dashboard');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.ibb.co/QXHT4d5/SMLE-BOOST-logo.png" alt="SMLE BOOST Logo" className="h-6 w-auto" />
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            {['features', 'testimonials', 'faq', 'pricing'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className={`hover:text-opacity-80 transition-colors ${isScrolled ? 'text-[#202020]' : 'text-[#202020]'}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleTryForFree}
            className="ml-6 bg-[#acc56a] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Dashboard
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;