'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto grayscale hover:grayscale-0 transition-all duration-700">
               <Image 
                src="/about-tal.jpg" 
                alt="Tal Berlinsky Saxophonist"
                fill
                className="object-cover rounded-sm shadow-2xl"
                unoptimized
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37]/50" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#D4AF37]/50" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-clash text-white">
              The Soul of the <span className="gold-text">Party</span>
            </h2>
            
            <p className="text-lg text-gray-400 font-satoshi leading-relaxed mb-6">
              Looking to hire a saxophonist who reads the room perfectly? Based in Amsterdam and performing across the Netherlands, Belgium, and Germany, Tal guarantees an unforgettable musical experience.
            </p>
            
            <p className="text-lg text-gray-400 font-satoshi leading-relaxed">
              With a versatile repertoire spanning Jazz, Pop, and House, Tal adapts the vibe instantly—whether it’s a tearful wedding ceremony or a wild dance floor.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37] opacity-[0.03] blur-[100px] pointer-events-none" />
    </section>
  );
}
