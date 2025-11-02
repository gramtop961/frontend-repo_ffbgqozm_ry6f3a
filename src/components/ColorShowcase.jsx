import React from 'react';
import { motion } from 'framer-motion';

const swatches = [
  { name: 'Electric Blue', colors: ['from-sky-400', 'to-cyan-300'] },
  { name: 'Neon Purple', colors: ['from-fuchsia-400', 'to-purple-400'] },
  { name: 'Sunburst', colors: ['from-amber-300', 'to-yellow-300'] },
  { name: 'Tropical', colors: ['from-teal-300', 'to-emerald-300'] },
  { name: 'Aurora', colors: ['from-pink-400', 'to-indigo-400'] },
];

const ColorShowcase = () => {
  return (
    <section id="palette" className="relative bg-gradient-to-b from-black via-black to-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Vivid Color Palette
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Smooth gradients with a soft glow to match the animated background.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {swatches.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${s.colors.join(' ')} opacity-70`} />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.18),_transparent_50%)]" />
              <div className="relative">
                <h3 className="text-lg font-semibold drop-shadow">{s.name}</h3>
                <div className="mt-4 flex gap-3">
                  <span className="h-9 w-9 rounded-full bg-white/60 shadow-inner" />
                  <span className="h-9 w-9 rounded-full bg-white/30 shadow-inner" />
                  <span className="h-9 w-9 rounded-full bg-black/40 shadow-inner ring-1 ring-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorShowcase;
