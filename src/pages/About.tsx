import { motion } from 'motion/react';
import { Button } from '../lib/ui/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            OUR <span className="text-primary">STORY</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Founded on the principles of discipline, community, and relentless progress.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary mb-8">BORN IN THE <span className="text-primary">TRENCHES</span></h2>
              <div className="space-y-6 text-secondary/60 text-lg leading-relaxed">
                <p>
                  KRAVO Fitness Studio started in 2015 as a small garage gym with a single mission: to provide the most effective, science-backed training environment for those who refuse to settle for average.
                </p>
                <p>
                  Today, we have grown into a premier fitness destination, but our core values remain the same. We believe that fitness is not just about how you look, but how you perform and how you feel in your everyday life.
                </p>
                <p>
                  Our studio is equipped with top-of-the-line equipment and staffed by the most dedicated professionals in the industry. We don't just sell memberships; we build athletes.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-primary mb-2">10+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary/40">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-primary mb-2">2.5k+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary/40">Members Transformed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/gym-about/800/1000?grayscale"
                alt="Gym Interior"
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white hidden md:block">
                <p className="text-2xl font-black uppercase tracking-tighter italic">"Train like a pro, <br />live like a legend."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-secondary mb-12">OUR <span className="text-primary">MISSION</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Empowerment</h3>
              <p className="text-secondary/60">Giving you the tools and knowledge to take control of your health and performance.</p>
            </div>
            <div className="p-8 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Community</h3>
              <p className="text-secondary/60">Creating a supportive environment where everyone pushes each other to be better.</p>
            </div>
            <div className="p-8 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Excellence</h3>
              <p className="text-secondary/60">Maintaining the highest standards in coaching, equipment, and facility management.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
