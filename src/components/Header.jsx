import React from 'react';
import { Search, User } from 'lucide-react';

export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
          <h1 className="text-xl font-semibold tracking-tight">RecoHub</h1>
        </div>

        <div className="flex-1 max-w-2xl mx-6">
          <label className="relative block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search movies, songs, books, series..."
              className="w-full pl-9 pr-3 py-2 rounded-md bg-neutral-100 focus:bg-white border border-neutral-200 focus:border-neutral-300 outline-none text-sm"
            />
          </label>
        </div>

        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition text-sm">
          <User className="h-4 w-4" />
          <span>Sign in</span>
        </button>
      </div>
    </header>
  );
}
