"use client";

import { useState } from "react";

interface LiteYouTubeProps {
  id: string;
  caption: string;
  title: string;
}

export default function LiteYouTube({ id, caption, title }: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  return (
    <figure className="flex flex-col">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-navy">
        {active ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerated-encoder; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            {/* Thumbnail (loaded from YouTube CDN, not the player) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-navy/30 group-hover:bg-navy/20 transition-colors" />
            {/* Play button */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gold shadow-lg group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-navy ml-1" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-grey text-xs mt-3 text-center font-medium">{caption}</figcaption>
    </figure>
  );
}
