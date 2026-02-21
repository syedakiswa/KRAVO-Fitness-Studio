import { TRAINERS } from '../constants';
import { Instagram, Twitter, Linkedin, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Trainers() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            THE <span className="text-primary">ELITE</span> TEAM
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            World-class professionals dedicated to your success. Meet the experts behind KRAVO.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {TRAINERS.map((trainer, index) => (
              <motion.div 
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-accent overflow-hidden group"
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-primary transition-colors"><Instagram size={20} /></a>
                      <a href="#" className="text-white hover:text-primary transition-colors"><Twitter size={20} /></a>
                      <a href="#" className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-black text-secondary">{trainer.name}</h2>
                      <p className="text-primary font-bold uppercase tracking-widest text-sm">{trainer.role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-secondary/60 mb-6 leading-relaxed">
                    {trainer.bio}
                  </p>
                  
                  <div className="mt-auto space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/40 mb-2 flex items-center">
                        <Award size={14} className="mr-1" /> Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map(s => (
                          <span key={s} className="bg-secondary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/40 mb-2">Qualifications</h4>
                      <ul className="text-sm text-secondary/80 font-medium list-disc list-inside">
                        {trainer.qualifications.map(q => (
                          <li key={q}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
