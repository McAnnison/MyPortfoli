import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center px-6 py-4" aria-label="Main Navigation">
        <div className="text-xl font-bold">Mensah Anni</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="px-4 py-2 hover:bg-gray-100 rounded transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex justify-between items-center px-4 py-4" aria-label="Mobile Navigation">
        <div className="text-xl font-bold">Mensah Anni</div>
        <div className="relative">
          <button 
            className="flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="w-6 h-0.5 bg-gray-800 transition-transform duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-800 transition-transform duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-800 transition-transform duration-300"></span>
          </button>
          
          {isMenuOpen && (
            <ul className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-40">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;