"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, site } from "@/lib/site";

const links = nav.filter((item) => item.href !== "/");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl [view-transition-name:site-header]">
      <div className="mx-auto grid h-14 max-w-[1600px] grid-cols-[1fr_auto] items-center px-4 lg:h-16 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link href="/" className="relative z-10 block h-7 w-36 justify-self-start sm:h-8 sm:w-44" transitionTypes={["nav-back"]}>
          <Image
            src="/images/logo-white.png"
            alt={site.name}
            fill
            priority
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
      {open ? (
        <nav className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-[14px] font-medium text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
