import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { MailForm } from "@/components/MailForm";
import { Container, HeroButton, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.address);

  return (
    <>
      <PageHero
        kicker="Elérhetőség"
        title="Lépj velünk kapcsolatba"
        text={`${site.address} · ${site.phone}`}
        image={{ src: "/images/gallery/g53.jpg", alt: "Helyszíni munkavégzés" }}
      >
        <HeroButton href={site.phoneHref}>Hívás</HeroButton>
        <HeroButton href="#uzenet" variant="ghost">
          Írj nekünk
        </HeroButton>
      </PageHero>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[24px] bg-surface p-7 md:col-span-2">
              <p className="text-[13px] font-medium text-muted">Székhely</p>
              <h2 className="font-display mt-3 text-[24px] font-medium">{site.name}</h2>
              <p className="mt-4 flex gap-3 text-[15px] leading-relaxed text-muted">
                <MapPin className="mt-0.5 size-5 shrink-0 text-foreground" />
                {site.address}
              </p>
            </article>
            <a
              href={site.phoneHref}
              className="rounded-[24px] bg-surface p-7 transition hover:bg-[#ececec]"
            >
              <p className="flex items-center gap-2 text-[13px] font-medium text-muted">
                <Phone className="size-4 text-foreground" />
                Telefon
              </p>
              <p className="mt-4 text-[18px] font-medium">{site.phone}</p>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-[24px] bg-surface p-7 transition hover:bg-[#ececec]"
            >
              <p className="flex items-center gap-2 text-[13px] font-medium text-muted">
                <Mail className="size-4 text-foreground" />
                E-mail
              </p>
              <p className="mt-4 break-all text-[16px] font-medium">{site.email}</p>
            </a>
            <article className="rounded-[24px] bg-surface p-7 md:col-span-2 lg:col-span-4">
              <p className="flex items-center gap-2 text-[13px] font-medium text-muted">
                <Clock className="size-4 text-foreground" />
                Nyitvatartás
              </p>
              <div className="mt-4 grid gap-2 text-[16px] sm:grid-cols-2">
                <p>{site.hours}</p>
                <p className="text-muted">{site.weekend}</p>
              </div>
            </article>
            <div className="overflow-hidden rounded-[24px] bg-surface md:col-span-2 lg:col-span-2 lg:min-h-[560px]">
              <iframe
                title="Térkép"
                className="h-80 w-full grayscale lg:h-full lg:min-h-[560px]"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              />
            </div>
            <div
              id="uzenet"
              className="rounded-[24px] bg-surface p-6 md:col-span-2 md:p-8 lg:col-span-2"
            >
              <h2 className="font-display mb-6 text-[24px] font-medium">Írj nekünk</h2>
              <MailForm
                columns={2}
                subject="Kapcsolatfelvétel – K-roy Electricity"
                submitLabel="Üzenet küldése"
                fields={[
                  { name: "nev", label: "Név", required: true, span: "half" },
                  { name: "email", label: "E-mail", type: "email", required: true, span: "half" },
                  { name: "telefon", label: "Telefonszám", type: "tel", required: true, span: "full" },
                  { name: "uzenet", label: "Üzenet", type: "textarea", required: true },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
