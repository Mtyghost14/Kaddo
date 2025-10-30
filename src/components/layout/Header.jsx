import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Productos', href: '#productos' },
    { name: 'Arreglos', href: '#arreglos' },
    { name: 'Globos', href: '#globos' },
    { name: 'Personalizados', href: '#personalizados' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}> 
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              Kaddo
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-900 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/[NUMERO_WHATSAPP]?text=Hola%20Kaddo%2C%20quiero%20cotizar%20un%20arreglo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.784 23.789l4.755-1.5C7.512 23.393 9.693 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.18 0-4.204-.673-5.881-1.82l-4.119 1.291 1.291-4.119C2.089 15.676 1.4 13.637 1.4 11.4c0-5.854 4.746-10.6 10.6-10.6s10.6 4.746 10.6 10.6S17.854 22 12 22z"/>
            </svg>
            Pedir por WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <span className="sr-only">Abrir menú</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;