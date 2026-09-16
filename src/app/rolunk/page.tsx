import Image from "next/image";
import type { Metadata } from "next";
import { LightboxGallery } from "@/components/LightboxGallery";
import { Container, CtaPanel, HeroButton, PageHero } from "@/components/ui";
import { heroImages } from "@/lib/heroes";
import {
  emergencyPackages,
  maintenanceNotes,
  portfolio,
  quoteItems,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Rólunk",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="A logó mögött"
        title="Tóth Károly vagyok, kecskeméti elektromos kivitelező vállalkozó."
        image={{ src: heroImages.electrician, alt: "Villanyszerelés Kecskemét" }}
      >
        <HeroButton href="/kapcsolat">Lépj velünk kapcsolatba</HeroButton>
        <HeroButton href="/referenciak" variant="ghost">
          Referenciák
        </HeroButton>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure className="relative aspect-[3/4] overflow-hidden rounded-[24px] bg-surface">
            <Image
              src="/images/portrait-karoly.jpg"
              alt={`${site.owner} – ${site.role}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
              priority
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-[14px] font-medium text-white">
              {site.owner} – {site.role}
            </figcaption>
          </figure>
          <div className="space-y-5 text-[16px] leading-relaxed text-muted">
            <p>
              Vállalkozásom egy stabil alapokon nyugvó, helyi családi vállalkozás, amely több mint
              egy évtizede megbízhatóan szolgálja ki mind a lakossági, mind az ipari ügyfelek
              igényeit. A szakma iránti elköteleződésemet édesapámnak köszönhetem, akitől nemcsak a
              szakmai alapokat sajátítottam el, hanem a munka iránti tiszteletet, a precizitást és
              a felelősségteljes szemléletet is.
            </p>
            <p>
              Alapvégzettségem mechatronikai technikus, amelyet tudatosan építettem be
              vállalkozásom tevékenységébe. Ennek eredményeként az automatizálási megoldások
              irányába is nyitottunk, folyamatos szakmai fejlődéssel és innovációval kiegészítve a
              klasszikus villanyszerelési szolgáltatásokat.
            </p>
            <p>
              Fejlődésünk új mérföldköveként 2025-ben megalapítottam a K-roy Electricity Kft.-t,
              amely kifejezetten az ipari szektor igényeire specializálódik. A társaság
              létrehozásával lehetőség nyílt arra, hogy még szervezettebben, nagyobb volumenű
              projekteket is elvállalva, magas szakmai színvonalon szolgáljuk ki partnereinket az
              ipari elektromos kivitelezés és automatizálás területén.
            </p>
            <p>
              Munkám során villámvédelmi felülvizsgálóként és villamos biztonsági
              felülvizsgálóként egy másik, rendkívül fontos területtel is nap mint nap találkozom.
              Gyakran keresnek meg olyan ügyfelek, akik korábbi kivitelezések során
              szakszerűtlen munkavégzés vagy megtévesztő vállalkozói magatartás miatt jelentős
              anyagi kárt szenvedtek. Ilyen esetekben részletes állapotfeltáró jegyzőkönyvet
              készítünk, amely szakmai alapot biztosíthat a későbbi jogi eljárásokhoz, és szükség
              esetén segítünk elindítani a kártérítési folyamatot is.
            </p>
            <p>
              Számomra ez nem csupán egy szolgáltatás, hanem küldetés is. Hiszem, hogy a
              tisztességesen dolgozó szakemberek érdeke közös az ügyfelekével: egy olyan szakmai
              környezet megteremtése, ahol a minőség, a biztonság és a felelősségvállalás az
              alapértékek. Célom, hogy szakmai munkámmal hozzájáruljak ahhoz, hogy a
              villanyszerelői és kivitelezői piac egyre tisztább, átláthatóbb és megbízhatóbb
              legyen.
            </p>
            <p>
              Hiszem, hogy a folyamatos tanulás, a szakmai elhivatottság, a megbízhatóság és a
              becsületes munkavégzés jelenti egy hosszú távon sikeres vállalkozás alapját. Ebben a
              szellemben dolgozunk minden egyes projekt során – legyen szó egy családi ház
              villamos hálózatáról, egy ipari automatizálási rendszerről vagy egy szakértői
              állapotfelmérésről.
            </p>
          </div>
        </Container>
      </section>

      <section className="px-3 md:px-5">
        <div className="relative mx-auto min-h-[420px] overflow-hidden rounded-[24px] md:min-h-[480px] md:rounded-[32px]">
          <Image
            src="/images/portfolio-karbantartas.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 py-16 text-center text-white md:min-h-[480px]">
            <blockquote className="font-display mx-auto max-w-4xl text-[20px] leading-relaxed font-medium md:text-[28px]">
              „Számunkra az ügyfeleink 100%-os elégedettsége a legfontosabb cél, amelyre minden
              egyes munkanapunk során következetesen törekszünk. Csapatunkkal kiemelt figyelmet
              fordítunk a precíz és pontos munkavégzésre, miközben nagy hangsúlyt helyezünk az
              igényes munkakörnyezet fenntartására is. Munkánkat a mindenkori jogszabályoknak és
              szakmai előírásoknak megfelelően végezzük, hogy ügyfeleink számára a legmagasabb
              színvonalú szolgáltatást nyújthassuk.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display mb-10 text-[32px] font-medium md:text-[40px]">Portfólió</h2>
          <LightboxGallery items={portfolio} />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid gap-4 lg:grid-cols-12">
          <article className="rounded-[28px] bg-surface p-7 md:p-10 lg:col-span-7">
            <h2 className="font-display text-[32px] font-medium md:text-[36px]">Árajánlat</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Személyes helyszíni felmérés és konzultáció után készítünk megrendelőink részére egy
              személyre szabott ajánlatot.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Mivel nem dolgozunk két egyforma helyen és nem csinálunk kaptafa kivitelezéseket,
              minden megrendelésünk egyedi igények alapján valósul meg az ügyfél elképzelése
              szerint.
            </p>
          </article>
          <article className="flex flex-col justify-between rounded-[28px] bg-foreground p-7 text-white md:p-10 lg:col-span-5">
            <p className="text-[13px] font-medium text-white/70">Kiszállás</p>
            <p className="mt-6 text-[18px] leading-relaxed font-medium">{site.travel}</p>
          </article>
          <article className="rounded-[28px] bg-surface p-7 md:p-10 lg:col-span-12">
            <p className="text-[16px] font-medium">Az ajánlat az alábbiakat tartalmazza:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quoteItems.map((item) => (
                <li key={item} className="rounded-[18px] bg-white px-5 py-4 text-[15px] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] bg-surface p-7 md:p-10 lg:col-span-6">
            <p className="text-[16px] leading-relaxed text-muted">
              Az elkészült ajánlattal jár egy személyes konzultáció, ahol pontonként átbeszéljük
              leendő megrendelőinkkel a műszaki tartalmat a tételesen kiírt anyaglista alapján.
            </p>
          </article>
          <article className="rounded-[28px] bg-surface p-7 md:p-10 lg:col-span-6">
            <p className="text-[16px] leading-relaxed text-muted">
              Az árajánlat elküldésével párhuzamosan küldünk egy megrendelőlapot, teljesítés
              igazolást (előre meghatározott munkafolyamatok alapján), pótmunkalapot és egy üres
              szerződéstervezetet. Így a megrendelő egyszerre megkapja az összes szükséges
              dokumentációt, ami megrendelés esetén gyorsítja a folyamatot.
            </p>
          </article>
          <article className="rounded-[28px] bg-surface p-7 md:p-10 lg:col-span-12">
            <h2 className="font-display text-[32px] font-medium md:text-[36px]">Karbantartás</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-muted">
              Vállalkozásom megbízásokat fogad lakossági ügyfelek, cégek és ipari létesítmények
              időszakos karbantartási munkák elvégzésére. A karbantartás éves keretszerződések
              alapján valósul meg, ahol meghatározzuk az elvégezendő feladatok listáját,
              terjedelmét és időbeli elhelyezkedését.
            </p>
          </article>
          {maintenanceNotes.map((item) => (
            <article key={item} className="rounded-[28px] bg-surface p-7 text-[15px] leading-relaxed text-muted lg:col-span-6">
              {item}
            </article>
          ))}
          <article className="rounded-[28px] bg-surface p-7 text-[14px] text-muted lg:col-span-12">
            Fizetés: heti vagy havi elszámolásban, készpénzben vagy 8 napos banki átutalás
            formájában.
          </article>
        </Container>
      </section>

      <section className="pb-12 md:pb-16">
        <Container>
          <h2 className="font-display text-[32px] font-medium md:text-[36px]">Hibaelhárítás</h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-muted">
            Előre nem látott, hirtelen meghibásodás esetén ügyeletes szolgáltatással is
            rendelkezünk, amely biztosítja a gyors reagálást. Ez a szolgáltatás keretszerződés
            megkötése után vehető igénybe, emelt áras óradíjjal vagy átalánydíjjal.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {emergencyPackages.map((pack, index) => (
              <article key={pack.title} className="rounded-[24px] bg-surface p-7">
                <p className="text-[12px] font-medium tracking-wide text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[18px] font-medium">{pack.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{pack.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <p className="rounded-[24px] bg-surface p-6 text-[14px] text-muted">
              Fizetés: új ügyfeleknél azonnali elszámolás.
            </p>
            <p className="rounded-[24px] bg-surface p-6 text-[14px] text-muted">
              Meglévő ügyfelek esetén (min. 1 év) heti vagy havi elszámolásban, készpénzben vagy 8
              napos banki átutalás formájában.
            </p>
            <p className="rounded-[24px] bg-foreground p-6 text-[14px] font-medium text-white md:col-span-2">
              A feltüntetett csomagok kizárólag Kecskemét területére vonatkoznak.
            </p>
          </div>
        </Container>
      </section>

      <CtaPanel
        title="Kérjen személyre szabott ajánlatot"
        text="Helyszíni felmérés után tételes, átlátható dokumentációt küldünk."
      />
    </>
  );
}
