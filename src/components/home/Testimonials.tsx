import { TESTIMONIALS } from '../../constants';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
            MEMBER <span className="text-primary">STORIES</span>
          </h2>
          <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
            Hear from the people who have transformed their lives at KRAVO Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-accent p-8 relative"
            >
              <Quote className="absolute top-6 right-8 text-primary/10" size={64} />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-secondary/80 italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-xs text-secondary/40 uppercase tracking-widest">Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
