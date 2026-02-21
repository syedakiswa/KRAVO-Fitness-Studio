import { SERVICES } from '../constants';
import { Button } from '../lib/ui/Button';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            OUR <span className="text-primary">SERVICES</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Comprehensive fitness solutions tailored to your unique goals and lifestyle.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                >
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <div className="w-20 h-20 bg-primary/10 flex items-center justify-center text-primary mb-8">
                      {IconComponent && <IconComponent size={40} />}
                    </div>
                    <h2 className="text-4xl font-black text-secondary mb-6">{service.title}</h2>
                    <p className="text-secondary/60 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2 text-secondary/80 font-bold">
                          <Icons.CheckCircle2 className="text-primary" size={20} />
                          <span className="text-sm uppercase tracking-wider">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button size="lg">Book a Session</Button>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 border-8 border-primary/10 pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
