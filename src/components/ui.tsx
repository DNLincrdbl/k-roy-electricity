import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-[1120px] px-4 lg:px-6 ${className}`}>{children}</div>;
}

export function PageHero({
  kicker,
  title,
  text,
  image,
  children,
}: {
  kicker?: string;
  title: string;
  text?: string;
  image?: { src: string; alt: string; className?: string };
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="px-3 pt-3 pb-2 md:px-5">
        <div className="relative mx-auto min-h-[min(62svh,720px)] overflow-hidden rounded-[24px] md:rounded-[32px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className={`object-cover ${image.className ?? ""}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-black/35" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,transparent_58%)]" />
          <div className="relative z-10 flex min-h-[min(62svh,720px)] flex-col items-center justify-center px-5 py-20 text-center text-white sm:px-8">
            {kicker ? (
              <p className="mb-5 text-[14px] font-medium tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                {kicker}
              </p>
            ) : null}
            <h1 className="font-display max-w-4xl text-[28px] leading-[1.15] font-medium text-balance text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] sm:text-[40px] md:text-[48px]">
              {title}
            </h1>
            {text ? (
              <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] md:mt-10 md:text-[18px]">
                {text}
              </p>
            ) : null}
            {children ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-3 pt-3 pb-2 md:px-5">
      <div className="mx-auto rounded-[24px] bg-surface px-6 py-16 md:rounded-[32px] md:px-16 md:py-24">
        {kicker ? <p className="mb-3 text-[14px] font-medium text-muted">{kicker}</p> : null}
        <h1 className="font-display max-w-4xl text-[32px] leading-[1.15] font-medium md:text-[40px]">
          {title}
        </h1>
        {text ? <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted">{text}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function HeroButton({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: "light" | "ghost" | "dark";
}) {
  const styles = {
    light: "bg-white text-foreground hover:bg-white/90",
    ghost: "bg-white/15 text-white backdrop-blur-md hover:bg-white/25",
    dark: "bg-foreground text-white hover:bg-black",
  } as const;

  const className = `inline-flex min-w-44 items-center justify-center rounded-full px-8 py-2.5 text-[14px] font-medium transition ${styles[variant]}`;

  if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function CtaPanel({
  title,
  text,
  href = "/kapcsolat",
  label = "Lépj velünk kapcsolatba",
}: {
  title: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="px-3 pb-20 md:px-5 md:pb-28">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 rounded-[24px] bg-surface p-8 md:flex-row md:items-center md:px-12 md:py-14">
        <div>
          <h2 className="font-display text-[28px] font-medium md:text-[32px]">{title}</h2>
          {text ? <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted">{text}</p> : null}
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 rounded-full bg-foreground px-8 py-2.5 text-[14px] font-medium text-white hover:bg-black"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
