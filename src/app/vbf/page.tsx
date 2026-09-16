import Image from "next/image";
import type { Metadata } from "next";
import { MailForm } from "@/components/MailForm";
import { Container, CtaPanel, HeroButton, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "VBF / Assistance +",
};

const outcomes = [
  "Valós képet az ingatlan villamos hálózatának állapotáról",
  "Műszeres mérésekkel alátámasztott biztonsági minősítést",
  "Kockázat szerinti hibabesorolást (mi sürgős, mi tervezhető)",
  "Részletes, jogilag is helytálló dokumentációt",
  "Szakmai tanácsot a szükséges javításokról – érthetően, mellébeszélés nélkül",
];

const reasons = [
  "Mert az elektromos hibák a lakástüzek egyik vezető okai",
  "Mert egy hibás földelés vagy érintésvédelem áramütést okozhat",
  "Mert ingatlan adásvételnél, bérbeadásnál egyre gyakrabban kérik",
  "Mert a biztosító is vizsgálhatja egy káresemény után",
];

export default function VbfPage() {
  return (
    <>
      <PageHero
        kicker="Assistance +"
        title="Villamos biztonsági felülvizsgálat – nem csak papír, hanem valódi vizsgálat."
        text="Egy ingatlan villamos hálózata nem látványos – de minden nap használjuk. A kérdés csak az: biztonságos-e valóban?"
        image={{ src: "/images/vbf-1.jpg", alt: "VBF felülvizsgálat" }}
      >
        <HeroButton href="#regisztracio">Regisztráció</HeroButton>
        <HeroButton href="/kapcsolat" variant="ghost">
          Kapcsolat
        </HeroButton>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-10 text-[16px] leading-relaxed text-muted">
            <p>
              A Villamos Biztonsági Felülvizsgálat (VBF) nem egy kötelező adminisztrációs kör,
              hanem szakértői állapotfelmérés, amely feltárja a rejtett hibákat, túlterheléseket,
              elöregedett vezetékeket és életveszélyes érintésvédelmi hiányosságokat.
            </p>
            <div>
              <h2 className="font-display text-[28px] font-medium text-foreground md:text-[32px]">
                Mit kap Ön a felülvizsgálattal?
              </h2>
              <ul className="mt-5 grid gap-3">
                {outcomes.map((item) => (
                  <li key={item} className="rounded-[16px] bg-surface px-5 py-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[28px] font-medium text-foreground md:text-[32px]">
                Miért fontos ez Önnek?
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-5">
                {reasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5">
                A felülvizsgálat célja nem a büntetés, hanem az, hogy Ön nyugodtan használhassa az
                otthonát vagy ingatlanát.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[28px] font-medium text-foreground md:text-[32px]">
                Szakértelem, nem rutinmunka
              </h2>
              <p className="mt-4">
                A vizsgálatot jogosultsággal rendelkező szakember végzi, korszerű mérőműszerekkel,
                a hatályos rendeletek és szabványok szerint. Nem sablonjegyzőkönyvet kap, hanem
                ténylegesen az Ön ingatlanára vonatkozó értékelést.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[28px] font-medium text-foreground md:text-[32px]">
                A végeredmény
              </h2>
              <p className="mt-4">Egy dokumentum, ami:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>biztonsági szempontból megnyugtató</li>
                <li>műszakilag megalapozott</li>
                <li>hatóság és biztosító felé is megállja a helyét</li>
              </ul>
              <p className="mt-4 font-medium text-gold">
                És ami a legfontosabb: segít megelőzni a bajt, mielőtt megtörténne.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {["/images/vbf-2.jpg", "/images/vbf-3.jpg"].map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={src}
                  alt="VBF felülvizsgálat"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="regisztracio" className="pb-12 md:pb-16">
        <Container>
          <div className="grid overflow-hidden rounded-[28px] bg-surface md:grid-cols-2">
            <div className="flex flex-col justify-center p-7 md:p-10">
              <h2 className="font-display text-[32px] font-medium">Regisztráció</h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
                Kérjük, add meg adataid, és a lehető leghamarabb felvesszük veled a kapcsolatot.
                Mellékletet az e-mailben tudsz csatolni.
              </p>
            </div>
            <div className="border-t border-white p-7 md:border-t-0 md:border-l md:p-10">
              <MailForm
                columns={2}
                subject="VBF / Assistance+ regisztráció"
                submitLabel="Regisztráció beküldése"
                fields={[
                  { name: "nev", label: "Név", required: true, span: "half" },
                  { name: "email", label: "E-mail", type: "email", required: true, span: "half" },
                  { name: "telefon", label: "Telefonszám", type: "tel", required: true, span: "half" },
                  {
                    name: "tipus",
                    label: "Felülvizsgálat típusa",
                    type: "select",
                    required: true,
                    span: "half",
                    options: [
                      "Ingatlan adás-vétel",
                      "Első üzembehelyezési",
                      "Időszakos",
                      "Kézi szerszámok felülvizsgálata",
                    ],
                  },
                  {
                    name: "erdekel",
                    label: "Érdekel",
                    type: "radio",
                    required: true,
                    options: ["Konzultáció", "VBF hibafelmérés", "VBF utáni hibajavítás"],
                  },
                  { name: "uzenet", label: "Üzenet", type: "textarea" },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaPanel
        title="Kérdésed van a felülvizsgálatról?"
        text="Hívj minket, vagy írj – a lehető leghamarabb jelentkezünk."
      />
    </>
  );
}
