"use client";

import { preload } from "react-dom";
import { useEffect, useState } from "react";

preload("/k-roy_hero_video.mp4", { as: "video" });

export function HeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) return null;

  return (
    <video
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center brightness-105 transition-opacity duration-700 max-md:object-contain max-md:brightness-100 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      onCanPlay={() => setReady(true)}
      onPlaying={() => setReady(true)}
    >
      <source src="/k-roy_hero_video.mp4" type="video/mp4" />
    </video>
  );
}
