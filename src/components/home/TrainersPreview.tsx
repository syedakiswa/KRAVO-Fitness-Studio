import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TRAINERS } from '../../constants';
import { Button } from '../../lib/ui/Button';
import { Instagram, Twitter } from 'lucide-react';

export function TrainersPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
              MEET OUR <span className="text-primary">EXPERTS</span>
            </h2>
            <p className="text-secondary/60 text-lg">
              Our trainers are more than just coaches; they are partners in your fitness journey.
            </p>
          </div>
          <Link to="/trainers">
            <Button variant="outline">All Trainers</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-secondary to-transparent">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-primary transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-white hover:text-primary transition-colors"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-1">{trainer.name}</h3>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{trainer.role}</p>
              <p className="text-secondary/60 line-clamp-2">{trainer.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
