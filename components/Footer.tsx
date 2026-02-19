import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { path: '/services', label: 'Audit & Assurance' },
    { path: '/services', label: 'Tax Services' },
    { path: '/services', label: 'Accounting' },
    { path: '/services', label: 'Consulting' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-brand-blue text-white">
      {/* Yellow accent line */}
      <div className="h-1 bg-brand-yellow shadow-glow" />
      
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Bookright Limited" 
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-xl text-white">
                Bookright
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Your trusted partner for audit, tax, accounting, and consulting services in Nairobi. We deliver excellence with integrity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 text-sm transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-white/80 text-sm transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Rattansi Educational Trust Building,<br />
                  Koinange Street, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <a href="tel:+254714126920" className="text-white/80 text-sm hover:text-white transition-colors">
                  +254 714 126 920
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <a href="mailto:info@bookright.co.ke" className="text-white/80 text-sm hover:text-white transition-colors">
                  info@bookright.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Bookright Limited. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-white/60 text-sm hover:text-brand-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/60 text-sm hover:text-brand-yellow transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
