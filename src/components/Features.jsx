import React from 'react';
import { Palette, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Immersive Motion',
    desc: 'A living backdrop with animated color pillars that pulse and flow.',
    gradient: 'from-fuchsia-500/20 via-cyan-500/20 to-yellow-500/20',
    ring: 'ring-fuchsia-400/40',
  },
  {
    icon: Palette,
    title: 'Vibrant Palette',
    desc: 'Curated blues, turquoises, yellows, pinks, and purples with glow.',
    gradient: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
    ring: 'ring-blue-400/40',
  },
  {
    icon: Zap,
    title: 'Crisp Performance',
    desc: 'Optimized visuals and smooth interactions powered by modern tooling.',
    gradient: 'from-emerald-500/20 via-cyan-500/20 to-indigo-500/20',
    ring: 'ring-emerald-400/40',
  },
  {
    icon: Shield,
    title: 'Accessible by Design',
    desc: 'High-contrast typography and thoughtful layers for readability.',
    gradient: 'from-yellow-500/20 via-orange-500/20 to-rose-500/20',
    ring: 'ring-yellow-400/40',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Designed to Impress
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Clean sections, vibrant accents, and fluid motion for a premium feel.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ring-1 ${f.ring}`}
            >
              <div className={`absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br ${f.gradient} blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
