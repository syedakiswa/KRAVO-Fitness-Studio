import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../../lib/ui/Button';
import { cn } from '../../lib/utils';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white py-2' // Default white background for all pages
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png" // consistent logo for all pages
              alt="KRAVO Fitness Studio"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-16 md:h-16" : "h-24 md:h-28"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-bold uppercase tracking-widest transition-colors',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}

            <Button size="sm" className="ml-4">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 text-secondary"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden pt-20',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-2xl font-bold uppercase tracking-widest transition-colors',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-secondary'
              )}
            >
              {link.name}
            </Link>
          ))}

          <Button size="lg" className="w-full">
            Join Now
          </Button>

          <div className="flex items-center space-x-2 text-secondary/60">
            <Phone size={18} />
            <span className="font-bold">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </nav>
  );
}