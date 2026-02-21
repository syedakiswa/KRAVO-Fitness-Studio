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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-2'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="KRAVO Fitness Studio"
                className={cn(
                  'w-auto object-contain transition-all duration-300',
                  isScrolled ? 'h-16 md:h-16' : 'h-24 md:h-28'
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

            {/* Mobile Menu Button — always z-50, above the overlay */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-secondary relative z-[60]"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay — separate from nav so z-index stacking is clean */}
      <div
        className={cn(
          'fixed inset-0 z-[55] bg-white transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Top spacer so links don't hide behind the navbar/logo */}
        <div className="pt-28 flex flex-col items-center space-y-8 p-8">
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
    </>
  );
}
