import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../../constants';
import { Button } from '../../lib/ui/Button';
import * as Icons from 'lucide-react';

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
              OUR <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-secondary/60 text-lg">
              We offer a wide range of fitness programs designed to help you achieve your goals, no matter your starting point.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline">View All Services</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 border-2 border-secondary/5 hover:border-primary transition-all duration-300 bg-accent"
              >
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent size={48} strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-secondary/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/services#${service.id}`}
                  className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-secondary hover:text-primary transition-colors"
                >
                  Learn More <Icons.ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
