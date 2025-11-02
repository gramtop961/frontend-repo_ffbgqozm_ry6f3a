import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black py-10 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <a className="hover:text-white" href="#features">Features</a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white" href="#palette">Palette</a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white" href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
