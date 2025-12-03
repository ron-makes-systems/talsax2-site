'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, User, Tag } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-luxury-charcoal">
       {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-clash text-white mb-6">Get in Touch</h2>
            <p className="text-gray-400 font-satoshi text-lg">
              Ready to elevate your event? Let's discuss the details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 font-clash">Contact Info</h3>
                
                <div className="space-y-6">
                  <a href="mailto:info@talsax.com" className="flex items-center gap-4 text-gray-300 hover:text-[#D4AF37] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-satoshi text-lg">info@talsax.com</span>
                  </a>

                  <a href="https://wa.me/31600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#D4AF37] transition-colors group">
                     <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-satoshi text-lg block">Prefer WhatsApp?</span>
                        <span className="text-sm text-gray-500">Chat directly with us</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <form className="space-y-4">
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors font-satoshi"
                    />
                </div>
                
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors font-satoshi"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input 
                            type="date" 
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors font-satoshi [color-scheme:dark]"
                        />
                    </div>
                    <div className="relative">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <select 
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors font-satoshi appearance-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Event Type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate</option>
                            <option value="party">Private Party</option>
                            <option value="club">Club/Festival</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full hover-gradient-gold bg-[#D4AF37] text-black font-bold py-4 rounded-xl transition-all duration-300 font-satoshi mt-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                    Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

