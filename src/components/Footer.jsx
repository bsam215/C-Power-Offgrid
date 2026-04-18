import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Linkedin as LinkedinIcon, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
      { name: 'Why Us', path: '/why-us' },
    ],
    resources: [
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
    services: [
      { name: 'Solar Systems', path: '/services#solar' },
      { name: 'BESS Solutions', path: '/services#bess' },
      { name: 'Hybrid Systems', path: '/services#hybrid' },
      { name: 'Off-Grid Power', path: '/services#offgrid' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-secondary" />
              <span className="font-heading font-bold text-xl text-text-primary">
                OffGrid<span className="text-secondary">Power</span>
              </span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-sm">
              Total Energy Freedom. Built for Legacy. Forged in Terrain. 
              Specialized EPC firm delivering solar, BESS, hybrid, and off-grid 
              energy solutions across three continents.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-text-secondary hover:text-secondary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-secondary text-sm">
            © {currentYear} OffGrid Power LLC. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Engineered with precision. Built for legacy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
