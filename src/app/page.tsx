import Image from "next/image";
import Link from "next/link";
import { serviceIcons } from "@/lib/icons";
import { clients, site, services } from "@/lib/site";
import { gallery } from "@/lib/gallery";
import { Container } from "@/components/ui";
import { HeroVideo } from "@/components/HeroVideo";

const showcase = [
  { src: "/images/portfolio-led.jpg", alt: "LED kivitelezés" },
  { src: "/images/epulet-fo-eloszto.jpg", alt: "Épület fő elosztó" },
  { src: "/images/portfolio-automata.jpg", alt: "Ipari automata" },
] as const;

export default function HomePage() {
  const preview = gallery.slice(0, 6);
  const highlights = services.slice(0, 4);
  const rest = services.slice(4);

  return (
    <>
      <section className="px-3 pt-3 pb-2 md:px-5">
        <div className="relative mx-auto min-h-[min(70svh,920px)] overflow-hidden rounded-[24px] bg-[#0a0a0a] md:min-h-[min(88svh,920px)] md:rounded-[32px]">
          <HeroVideo />
          <div className="pointer-events-none absolute inset-0 bg-black/40 md:bg-black/25" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/45" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,transparent_58%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[48%] h-36 -translate-y-1/2 bg-black/40 blur-2xl md:h-52" />
          <div className="relative z-10 flex min-h-[min(70svh,920px)] flex-col items-center px-5 pt-28 text-center text-white sm:px-8 md:min-h-[min(88svh,920px)] md:pt-36 lg:pt-44">
            <p className="mb-5 text-[13px] font-medium tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-[14px]">
              Villanyszerelés · Kecskemét
            </p>
            <h1 className="font-display max-w-4xl text-[28px] leading-[1.15] font-medium text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] sm:text-[40px] md:text-[48px]">
              {site.tagline}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-display text-[32px] leading-tight font-medium md:text-[40px]">
              Teljes villamos kivitelezés
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
              {site.qualityQuote}.
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {highlights.map((service) => {
              const Icon = serviceIcons[service.slug];
              const body = (
                <>
                  <Icon className="mb-4 size-5 text-foreground" strokeWidth={1.6} />
                  <h3 className="text-[16px] font-medium">{service.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{service.text}</p>
                </>
              );
              return "href" in service && service.href ? (
                <Link key={service.slug} href={service.href} className="block">
                  {body}
                </Link>
              ) : (
                <article key={service.slug}>{body}</article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-8 md:pb-12">
        <Container className="grid items-end gap-4 md:grid-cols-3">
          {showcase.map((item, index) => (
            <div
              key={item.src}
              className={`relative overflow-hidden rounded-[20px] ${
                index === 1 ? "aspect-[3/4] md:-mb-8 md:mt-10" : "aspect-[4/5]"
              }`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="33vw" className="object-cover" />
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display mb-12 text-[32px] font-medium md:text-[40px]">Szolgáltatások</h2>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((service) => {
              const Icon = serviceIcons[service.slug];
              return (
                <article key={service.slug}>
                  <Icon className="mb-4 size-5 text-foreground" strokeWidth={1.6} />
                  <h3 className="text-[16px] font-medium">{service.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{service.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="px-3 pb-4 md:px-5">
        <div className="relative mx-auto min-h-[420px] overflow-hidden rounded-[24px] md:min-h-[520px] md:rounded-[32px]">
          <Image
            src="/images/elosztoszekreny.jpeg"
            alt="Elosztószekrény"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/55" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,transparent_60%)]" />
          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center text-white md:min-h-[520px] md:py-32">
            <blockquote className="font-display mx-auto max-w-4xl text-[28px] leading-tight font-medium drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)] md:text-[40px]">
              „{site.qualityQuote}”
            </blockquote>
            <Link
              href="/kapcsolat"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-2.5 text-[14px] font-medium text-foreground hover:bg-white/90"
            >
              Lépj velünk kapcsolatba
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[32px] font-medium md:text-[40px]">
              Referenciák a helyszínen
            </h2>
            <Link href="/referenciak" className="text-[14px] font-medium text-gold hover:text-gold-soft">
              Teljes galéria
            </Link>
          </div>
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((item) => (
              <Link key={item.src} href="/referenciak" className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-[16px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block px-1 text-[14px] font-medium text-foreground">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.slice(0, 6).map((client) => (
              <article key={client.name} className="rounded-[20px] bg-surface p-6">
                <h3 className="text-[16px] font-medium">{client.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{client.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-surface p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-[28px] font-medium md:text-[32px]">
              Piacvezető partnerünk villamosanyag-kínálata
            </h2>
            <p className="mt-2 text-[14px] text-muted">Daniella – minőségi anyagok a kivitelezéshez.</p>
          </div>
          <a
            href={site.partner.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-gold px-8 py-2.5 text-[14px] font-medium text-white hover:bg-gold-soft"
          >
            Klikk!
          </a>
        </Container>
      </section>
    </>
  );
}
