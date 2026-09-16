"use client";

import { preload } from "react-dom";
import { useEffect, useState } from "react";

const DESKTOP_SRC = "/k-roy_hero_video.mp4";
const MOBILE_SRC = "/images/k-roy-herovideomobile.mp4";

export function HeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [src, setSrc] = useState(DESKTOP_SRC);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const syncMotion = () => setReduceMotion(motion.matches);
    const syncMobile = () => {
      const next = mobile.matches;
      setIsMobile(next);
      setReady(false);
      setSrc(next ? MOBILE_SRC : DESKTOP_SRC);
      preload(next ? MOBILE_SRC : DESKTOP_SRC, { as: "video" });
    };
    syncMotion();
    syncMobile();
    motion.addEventListener("change", syncMotion);
    mobile.addEventListener("change", syncMobile);
    return () => {
      motion.removeEventListener("change", syncMotion);
      mobile.removeEventListener("change", syncMobile);
    };
  }, []);

  if (reduceMotion) return null;

  const fillBox = !isMobile || src === MOBILE_SRC;

  return (
    <video
      key={src}
      className={`hero-video pointer-events-none object-cover object-center brightness-105 transition-opacity duration-700 ${
        fillBox
          ? "absolute inset-0 h-full w-full"
          : "absolute top-1/2 left-1/2 h-[72%] w-auto min-w-full -translate-x-1/2 -translate-y-1/2"
      } ${ready ? "opacity-100" : "opacity-0"}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      src={src}
      onCanPlay={() => setReady(true)}
      onPlaying={() => setReady(true)}
      onError={() => {
        if (src !== DESKTOP_SRC) {
          setReady(false);
          setSrc(DESKTOP_SRC);
        }
      }}
    />
  );
}
