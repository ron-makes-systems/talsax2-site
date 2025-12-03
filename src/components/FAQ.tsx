'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Do you bring your own equipment?",
    answer: "Yes, I bring a complete professional sound system suitable for ceremonies, receptions, and parties. For larger events where a DJ is present, I can easily plug into their system."
  },
  {
    question: "Can we request specific songs?",
    answer: "Absolutely! I love tailoring the setlist to your taste. You can request special songs for key moments (like the first dance or aisle walk), and I'll build the rest of the vibe around your preferences."
  },
  {
    question: "How far do you travel?",
    answer: "I'm based in Amsterdam but perform regularly across the Netherlands, Belgium, and Germany. Travel within 25km of Amsterdam is included; further distances are charged at a standard rate per kilometer."
  },
  {
    question: "What if you get sick?",
    answer: "In the extremely rare event that I cannot perform due to illness, I have a network of top-tier professional saxophonists who can step in to ensure your event's music is seamless."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-luxury-black relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold font-clash text-white mb-6">Common <span className="gold-text">Questions</span></h2>
            <p className="text-gray-400 font-satoshi">Everything you need to know before booking.</p>
        </motion.div>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-white/10 rounded-xl overflow-hidden bg-[#0f0f0f]"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                        <span className="font-bold font-clash text-white text-lg">{faq.question}</span>
                        <span className="text-[#D4AF37]">
                            {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </span>
                    </button>
                    
                    <motion.div
                        initial={false}
                        animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-gray-400 font-satoshi leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

