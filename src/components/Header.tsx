"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";

const links = nav.filter((item) => item.href !== "/");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const lastY = useRef(0);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
    setHidden(false);
  }

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setHidden(false);
        lastY.current = window.scrollY;
        return;
      }
      if (open) {
        setHidden(false);
        lastY.current = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 16 || delta < -8) setHidden(false);
      else if (delta > 10 && y > 72) setHidden(true);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [view-transition-name:site-header] motion-reduce:transition-none lg:!translate-y-0 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto grid h-14 max-w-[1600px] grid-cols-[1fr_auto] items-center px-4 lg:h-16 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link href="/" className="relative z-10 block h-7 w-36 justify-self-start sm:h-8 sm:w-44" transitionTypes={["nav-back"]}>
          <Image
            src="/images/logo-white.png"
            alt={site.name}
            fill
            sizes="176px"
            className="object-contain object-left brightness-0"
          />
        </Link>
        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {links.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                transitionTypes={["nav-forward"]}
                className={`rounded-full px-3 py-2 text-[14px] font-medium transition ${
                  active
                    ? "bg-surface text-foreground"
                    : "text-foreground/80 hover:bg-surface hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-[14px] font-medium text-white transition hover:bg-black"
          >
            Hívás
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className={`min-h-0 overflow-hidden bg-white/95 px-4 backdrop-blur-xl ${open ? "border-t border-line py-4" : "py-0"}`}>
          <div className="flex flex-col gap-1">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-[14px] font-medium text-foreground hover:bg-surface"
                style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
