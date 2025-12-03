'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Tal Saxophone Live Performance Atmosphere"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          unoptimized
        />
        
        {/* Simple, High-Contrast Overlay */}
        {/* 1. Overall Darkening - Keeps the image visible but pushes it back */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* 2. Bottom Gradient - Ensures text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />

        {/* 3. Top Gradient - For Header Visibility */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-10">
        
        {/* Social Proof Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-lg"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-sm font-satoshi font-medium text-white tracking-wide uppercase">
            5.0 Rating • 50+ Events/Year
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white font-clash drop-shadow-2xl max-w-5xl"
        >
          Make Your Event <br/><span className="gold-text">Unforgettable.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-satoshi font-medium leading-relaxed drop-shadow-lg"
        >
          Premium live saxophone by Tal Berlinsky. The perfect blend of high-energy party vibes and elegant jazz atmosphere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-3 hover-gradient-gold bg-[#D4AF37] text-black font-bold py-5 px-10 rounded-full font-satoshi text-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
          >
            Check Availability
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <span className="text-base text-gray-300 font-satoshi font-medium flex items-center gap-2 drop-shadow-md">
            <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            Response within 24 hours
          </span>
        </motion.div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
