import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ColorShowcase from './components/ColorShowcase';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="top" className="min-h-screen bg-black text-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 to-transparent px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#top" className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-xl font-bold text-transparent">Vibe Studio</a>
          <nav className="hidden gap-6 sm:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#palette" className="text-sm text-white/80 hover:text-white">Palette</a>
          </nav>
          <a
            href="#features"
            className="hidden rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 sm:block"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <ColorShowcase />
      </main>

      <Footer />
    </div>
  );
};

export default App;
