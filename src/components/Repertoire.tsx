'use client';

import { motion } from 'framer-motion';

const repertoire = [
  {
    category: "Party Time",
    songs: ["Titanium (David Guetta)", "Pepas", "Freed From Desire", "Danza Kuduro", "I'm Still Standing"]
  },
  {
    category: "Relaxed Evening",
    songs: ["What a Wonderful World", "Just the Two of Us", "Girl from Ipanema", "Smooth Operator"]
  },
  {
    category: "Jazz Standards",
    songs: ["Fly Me To The Moon", "Summertime", "Autumn Leaves", "All of Me"]
  },
  {
    category: "Dutch Hits",
    songs: ["Leef", "Zeg Maar Niets Meer"]
  }
];

export default function Repertoire() {
  return (
    <section id="repertoire" className="py-24 bg-luxury-black relative">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold font-clash text-white mb-6">The <span className="gold-text">Repertoire</span></h2>
            <p className="text-gray-400 font-satoshi max-w-2xl text-lg">
                A curated selection of favorites tailored to set the perfect mood for your event.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {repertoire.map((category, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 font-clash border-b border-[#D4AF37]/30 pb-4 inline-block pr-12 group-hover:border-[#D4AF37] transition-colors duration-500">
                        {category.category}
                    </h3>
                    <ul className="space-y-3">
                        {category.songs.map((song, i) => (
                            <li key={i} className="text-gray-400 font-satoshi group-hover:text-gray-200 transition-colors duration-300">
                                {song}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}


