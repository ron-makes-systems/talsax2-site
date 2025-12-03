'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Klaartje",
    event: "Student Party, Delft",
    text: "Tal brought immediately a vibe. With the songs he played he felt what the room needed. Great playlist!"
  },
  {
    name: "Valesca",
    event: "Boat Party, Amsterdam",
    text: "Tal plays with his heart and soul. If you have an event, Tal is the guy to call to make sure you have a vibrant setting."
  },
  {
    name: "Tamar",
    event: "Art Gala, Amsterdam",
    text: "Everything was perfect! You don't have to arrange anything yourself, Tal has all his equipment. 5 stars well deserved!"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-luxury-charcoal relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-4">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-16 font-clash text-white"
            >
                What They Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-[#0f0f0f] border border-white/5 p-8 rounded-xl hover:border-[#D4AF37]/20 transition-colors duration-300"
                    >
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                            ))}
                        </div>
                        <p className="text-gray-300 font-satoshi italic mb-6 leading-relaxed">"{review.text}"</p>
                        <div>
                            <p className="text-white font-bold font-clash">{review.name}</p>
                            <p className="text-gray-500 text-sm font-satoshi">{review.event}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

