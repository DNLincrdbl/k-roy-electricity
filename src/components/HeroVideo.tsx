"use client";

import { useEffect, useState } from "react";

export function HeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);

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
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center brightness-105 max-md:object-contain max-md:brightness-100"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero-electrician.jpg"
      aria-hidden
    >
      <source src="/k-roy_hero_video.mp4" type="video/mp4" />
    </video>
  );
}
