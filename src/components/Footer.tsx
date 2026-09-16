import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-surface">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div className="sm:col-span-2">
          <div className="relative mb-5 h-10 w-48">
            <Image
              src="/images/logo-white.png"
              alt={site.name}
              fill
              sizes="192px"
              className="object-contain object-left brightness-0"
            />
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-muted">
            Kecskeméti villanyszerelés, ipari kivitelezés, VBF felülvizsgálat és automatizálás.
            Minőségi munka, valós műszaki tartalom.
          </p>
        </div>
        <div>
          <h2 className="text-[14px] font-medium">Navigáció</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-foreground" href="/aszf">
                ÁSZF
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/adatkezeles">
                Adatkezelés
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-[14px] text-muted">
          <h2 className="text-[14px] font-medium text-foreground">Kapcsolat</h2>
          <p>{site.address}</p>
          <a className="block hover:text-foreground" href={site.phoneHref}>
            {site.phone}
          </a>
          <a className="block hover:text-foreground" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="flex gap-4 pt-2 text-[12px]">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-foreground">
              Facebook
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-[12px] text-muted">
        {site.shortName} · Minden jog fenntartva {new Date().getFullYear()}
      </div>
    </footer>
  );
}
