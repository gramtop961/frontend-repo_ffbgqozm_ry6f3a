import React from 'react';

export default function FiltersBar({ domain, onDomainChange, minRating, onMinRatingChange, sortBy, onSortByChange }) {
  return (
    <div className="w-full bg-white/70 backdrop-blur border border-neutral-200 rounded-lg p-3 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2">
        <label className="text-sm text-neutral-600">Domain</label>
        <select
          value={domain}
          onChange={(e) => onDomainChange(e.target.value)}
          className="text-sm border border-neutral-200 rounded-md px-2 py-1 bg-white"
        >
          <option>All</option>
          <option>Movie</option>
          <option>Song</option>
          <option>Book</option>
          <option>Series</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm text-neutral-600">Min Rating</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={minRating}
          onChange={(e) => onMinRatingChange(parseFloat(e.target.value))}
        />
        <span className="text-sm text-neutral-700 w-8 text-right">{minRating}</span>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <label className="text-sm text-neutral-600">Sort</label>
        <select
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value)}
          className="text-sm border border-neutral-200 rounded-md px-2 py-1 bg-white"
        >
          <option value="trending">Trending</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="rating-asc">Rating: Low to High</option>
          <option value="title-asc">Title: A → Z</option>
          <option value="title-desc">Title: Z → A</option>
        </select>
      </div>
    </div>
  );
}
