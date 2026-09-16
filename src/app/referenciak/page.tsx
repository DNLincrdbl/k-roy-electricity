import type { Metadata } from "next";
import { LightboxGallery } from "@/components/LightboxGallery";
import { Container, CtaPanel, HeroButton, PageHero } from "@/components/ui";
import { gallery } from "@/lib/gallery";
import { heroImages } from "@/lib/heroes";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referenciák",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        kicker="Munkáink"
        title="Referenciák"
        text="Ipari, kereskedelmi és lakossági projektek – a papír mögött valós kivitelezés."
        image={{ src: heroImages.eloszto, alt: "Épület fő elosztó" }}
      >
        <HeroButton href="#galeria">Fotógaléria</HeroButton>
        <HeroButton href="/kapcsolat" variant="ghost">
          Kapcsolat
        </HeroButton>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display mb-10 text-[32px] font-medium md:text-[40px]">Partnereink</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <article key={client.name} className="rounded-[24px] bg-surface p-6 md:p-7">
                <h3 className="text-[18px] font-medium">{client.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{client.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="galeria" className="pb-12 md:pb-16">
        <Container>
          <h2 className="font-display mb-10 text-[32px] font-medium md:text-[40px]">Fotógaléria</h2>
          <LightboxGallery items={gallery} />
        </Container>
      </section>

      <CtaPanel
        title="Hasonló projektet tervez?"
        text="Mutassuk meg, milyen a valós műszaki tartalom a papír mögött."
      />
    </>
  );
}
