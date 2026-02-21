import { Shield, Zap, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

const TRUST_POINTS = [
  {
    icon: Shield,
    title: "Elite Safety",
    description: "Our facility maintains the highest standards of cleanliness and safety protocols."
  },
  {
    icon: Zap,
    title: "High Energy",
    description: "An atmosphere designed to motivate you and push you to your absolute best."
  },
  {
    icon: Target,
    title: "Result Driven",
    description: "We focus on measurable progress and helping you hit your specific targets."
  },
  {
    icon: Award,
    title: "Expert Coaches",
    description: "Work with certified professionals who are leaders in the fitness industry."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-pattern" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            WHY <span className="text-primary">KRAVO</span> STUDIO?
          </h2>
          <p className="text-white/60 text-lg">
            We are not just a gym; we are a community dedicated to excellence. Here is why our members keep coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TRUST_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary transition-colors duration-300">
                <point.icon size={36} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{point.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
