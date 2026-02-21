import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black font-display tracking-tighter">
              KRAVO<span className="text-primary">.</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Pushing boundaries and redefining fitness since 2015. Join the elite community of high-performers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/KRAVO-Fitness-Studio/61584568661897/" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
        
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/trainers" className="hover:text-primary transition-colors">Our Trainers</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Class Schedule</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Shaheed-e-Millat Service Road, Cp & Berar Chs, Karachi, Pakistan, 7530</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+92336 8267316</span>
              </li>
      
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">Get the latest fitness tips and studio updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border border-white/20 px-4 py-2 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white font-bold py-2 uppercase tracking-wider hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2024 KRAVO Fitness Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
