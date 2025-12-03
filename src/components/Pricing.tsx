'use client';

import { motion } from 'framer-motion';

const packages = [
  {
    title: "The Soloist",
    price: "€330",
    description: "A cool addition to your event, making it unique for you and your guests. 1 hour of live saxophone music based on your preferred genre.",
    idealFor: "Receptions, Ceremonies",
    popular: false
  },
  {
    title: "The Duo",
    subtitle: "(Sax + Singer)",
    price: "€650",
    description: "Monica & Tal. From an elegant reception to a party where no one can stand still. The perfect blend of vocals and brass.",
    popular: false
  },
  {
    title: "The Full Experience",
    subtitle: "(Sax + DJ)",
    price: "€1,050",
    description: "One Stop Shop. Full DJ set, live Saxophonist, and complete sound system. We handle the energy, you handle the dancing.",
    tag: "Best Value",
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-clash text-white mb-4">Packages</h2>
          <p className="text-gray-400 font-satoshi">Choose the perfect vibe for your event</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-8 rounded-2xl relative flex flex-col ${pkg.popular ? 'border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}
            >
              {pkg.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 hover-gradient-gold bg-[#D4AF37] text-black text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  {pkg.tag}
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-white font-clash">{pkg.title}</h3>
              {pkg.subtitle && <span className="text-gray-400 text-sm font-satoshi mb-2 block">{pkg.subtitle}</span>}
              
              <div className="mt-4 mb-6">
                <span className="text-gray-400 text-sm font-satoshi">From</span>
                <div className="text-4xl font-bold text-[#D4AF37] font-clash">{pkg.price}</div>
              </div>

              <p className="text-gray-300 font-satoshi leading-relaxed mb-6 flex-grow">
                {pkg.description}
              </p>

              {pkg.idealFor && (
                <div className="mb-6 pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Ideal for:</span>
                  <p className="text-white font-satoshi">{pkg.idealFor}</p>
                </div>
              )}

              <a href="#contact" className={`w-full py-3 rounded-xl text-center font-bold font-satoshi transition-all duration-300 ${pkg.popular ? 'hover-gradient-gold bg-[#D4AF37] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 font-satoshi text-sm">
          Rates include travel up to 25km from 1081HJ. Beyond that, €0.50/km.
        </div>
      </div>
    </section>
  );
}

