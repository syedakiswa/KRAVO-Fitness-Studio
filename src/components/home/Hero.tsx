import { motion } from 'motion/react';
import { Button } from '../../lib/ui/Button';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero1.png"
          alt="Gym Background"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
      </div>

      {/* pt-32 mobile pe (navbar h-24 logo + padding), sm se pt-36, lg pe pt-40 */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-32 sm:pt-36 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-primary text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-6">
            Elite Fitness Studio
          </span>

          {/* Heading font size mobile pe chota kiya taake clip na ho */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8">
            PUSH YOUR <span className="text-primary">LIMITS</span> BEYOND MEASURE
          </h1>

          <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
            Join KRAVO Fitness Studio today and transform your body with our world-class trainers and high-intensity programs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to='/contact'>
              <Button size="lg" className="w-full sm:w-auto group">
                Join Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to='/contact'>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-secondary">
                Free Trial
              </Button>
            </Link>
            <a
              href="tel:+923368267316"
              className="flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-primary transition-colors mt-4 sm:mt-0 sm:ml-4"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -mr-20 -mb-20" />
    </section>
  );
}
