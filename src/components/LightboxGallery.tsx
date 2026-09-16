"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Item = { src: string; title: string };

function tileClass(index: number) {
  const pattern = index % 8;
  if (pattern === 0) return "sm:col-span-2";
  return "";
}

export function LightboxGallery({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((index) => (index === null ? index : (index - 1 + items.length) % items.length));
  }, [items.length]);
  const next = useCallback(() => {
    setActive((index) => (index === null ? index : (index + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group flex flex-col text-left ${tileClass(index)}`}
          >
            <span
              className={`relative block w-full overflow-hidden rounded-[20px] bg-surface ${
                index % 8 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />
            </span>
            <span className="mt-3 px-1 text-[14px] font-medium text-foreground">{item.title}</span>
          </button>
        ))}
      </div>
      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-black/80 text-white backdrop-blur-xl"
          onClick={close}
          onTouchStart={(event) => {
            const x = event.changedTouches[0]?.clientX ?? 0;
            event.currentTarget.dataset.startX = String(x);
          }}
          onTouchEnd={(event) => {
            const start = Number(event.currentTarget.dataset.startX ?? 0);
            const dx = (event.changedTouches[0]?.clientX ?? 0) - start;
            if (dx > 60) prev();
            if (dx < -60) next();
          }}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <p className="text-[13px] text-white/70">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
              onClick={close}
              aria-label="Bezárás"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-16">
            <button
              type="button"
              className="absolute left-2 z-10 inline-flex rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-white/10 md:left-3"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              aria-label="Előző"
            >
              <ChevronLeft className="size-6" />
            </button>
            <div
              className="relative h-full w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                key={items[active].src}
                src={items[active].src}
                alt={items[active].title}
                fill
                className="fade-swap object-contain"
                sizes="100vw"
              />
            </div>
            <button
              type="button"
              className="absolute right-2 z-10 inline-flex rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-white/10 md:right-3"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Következő"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
          <div
            className="mx-auto mb-6 w-full max-w-3xl px-5 text-center"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-foreground">
              {items[active].title}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
