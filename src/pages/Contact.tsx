import { Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';
import { MembershipForm } from '../components/membership/MembershipForm';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Have questions? We are here to help you start your journey.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-secondary mb-8">CONTACT <span className="text-primary">INFO</span></h2>
              <p className="text-secondary/60 text-lg mb-12 leading-relaxed">
                Whether you are a beginner or a pro, we would love to hear from you. Stop by the studio or drop us a message.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-wider mb-1">Our Location</h4>
                    <p className="text-secondary/60">Shaheed-e-Millat Service Road, Cp & Berar Chs, Karachi, Pakistan, 7530</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-wider mb-1">Phone Number</h4>
                    <p className="text-secondary/60">+92336 8267316</p>
                  </div>
                </div>

         
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-secondary uppercase tracking-wider">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/people/KRAVO-Fitness-Studio/61584568661897/" className="w-12 h-12 bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                
                </div>
              </div>

          <div className="mt-12">
  <a 
    href="https://wa.me/+923368267316" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
  >
    <MessageSquare size={20} />
    <span>Chat on WhatsApp</span>
  </a>
</div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <MembershipForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[500px] w-full bg-accent grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6991858813926!2d67.0755228!3d24.874121599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ebc02447991%3A0x658ca6eef2572654!2sShaheed-e-Millat%20Service%20Road%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1771687311350!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
