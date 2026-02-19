import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Bookright Limited" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-brand-black' : 'text-brand-black'
            }`}>
              Bookright
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-all duration-300 link-underline ${
                  isActive(link.path)
                    ? 'text-brand-blue'
                    : isScrolled
                    ? 'text-brand-gray-1 hover:text-brand-blue'
                    : 'text-brand-gray-1 hover:text-brand-blue'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+254714126920"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-brand-gray-2' : 'text-brand-gray-2'
              } hover:text-brand-blue`}
            >
              <Phone className="w-4 h-4" />
              <span>+254 714 126 920</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-gray-3 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-black" />
            ) : (
              <Menu className="w-6 h-6 text-brand-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-white z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-8">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-3 border-b border-brand-gray-3 transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-brand-blue'
                    : 'text-brand-gray-1 hover:text-brand-blue'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:+254714126920"
              className="flex items-center gap-2 text-brand-gray-2"
            >
              <Phone className="w-5 h-5" />
              <span>+254 714 126 920</span>
            </a>
            <Link to="/contact" className="btn-primary w-full text-center">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
