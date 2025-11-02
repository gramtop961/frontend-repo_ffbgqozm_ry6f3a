import React, { useState } from 'react';
import { Star } from 'lucide-react';

const domainColors = {
  Movie: 'bg-rose-50 text-rose-700 border-rose-200',
  Song: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Book: 'bg-amber-50 text-amber-800 border-amber-200',
  Series: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

export default function ContentCard({ item, onRate }) {
  const [hovered, setHovered] = useState(null);

  const handleRate = (value) => {
    onRate(item.id, value);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="group rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition"
          loading="lazy"
        />
        <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-md border ${domainColors[item.domain] || 'bg-neutral-50 text-neutral-700 border-neutral-200'}`}>
          {item.domain}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold tracking-tight text-neutral-900 line-clamp-1">{item.title}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2 mt-1">{item.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            {stars.map((s) => (
              <Star
                key={s}
                className={`h-4 w-4 ${s <= (hovered ?? item.rating) ? 'fill-amber-400' : ''}`}
                onMouseEnter={() => setHovered(s)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleRate(s)}
                role="button"
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500">{item.ratingsCount.toLocaleString()} ratings</span>
        </div>
      </div>
    </div>
  );
}
