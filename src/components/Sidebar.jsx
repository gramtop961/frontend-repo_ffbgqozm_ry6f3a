import React from 'react';
import { Home, Film, Music, Book, Tv } from 'lucide-react';

const Item = ({ active, icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition border ${
      active
        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
        : 'hover:bg-neutral-50 text-neutral-700 border-transparent'
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

export default function Sidebar({ selected, onSelect }) {
  return (
    <aside className="h-full w-64 shrink-0 border-r border-neutral-200 bg-white/80 backdrop-blur p-4 hidden md:block">
      <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 uppercase tracking-wider">Browse</div>
      <nav className="space-y-1">
        <Item icon={Home} label="All" active={selected === 'All'} onClick={() => onSelect('All')} />
        <Item icon={Film} label="Movies" active={selected === 'Movie'} onClick={() => onSelect('Movie')} />
        <Item icon={Music} label="Songs" active={selected === 'Song'} onClick={() => onSelect('Song')} />
        <Item icon={Book} label="Books" active={selected === 'Book'} onClick={() => onSelect('Book')} />
        <Item icon={Tv} label="Web Series" active={selected === 'Series'} onClick={() => onSelect('Series')} />
      </nav>
    </aside>
  );
}
