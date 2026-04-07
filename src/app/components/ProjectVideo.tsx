"use client";

import { font2 } from "../[locale]/fonts";

interface ProjectVideoProps {
  src: string;
  id: number;
}

export default function ProjectVideo({ src, id }: ProjectVideoProps) {
  // Robust looping fallback
  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.target as HTMLVideoElement;
    video.currentTime = 0;
    video.play().catch((err) => {
      console.error("Video loop restart failed:", err);
    });
  };

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 transition-all duration-500 hover:border-white/20 shadow-2xl">
      <div className="aspect-video w-full overflow-hidden">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onEnded={handleEnded}
          className="w-full h-full object-cover filter transition-all duration-1000 scale-[1.01] group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-white opacity-40 group-hover:w-12 transition-all duration-500"></div>
          <span
            className={`${font2.className} text-white/40 group-hover:text-white/80 text-[10px] tracking-widest transition-colors duration-500 uppercase`}
          >
            Site Capture 0{id}
          </span>
        </div>
      </div>
    </div>
  );
}
