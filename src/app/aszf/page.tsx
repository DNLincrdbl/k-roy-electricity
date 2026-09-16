import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ÁSZF",
};

export default function AszfPage() {
  return (
    <>
      <PageHero
        kicker="Jogi"
        title="Általános Szerződési Feltételek (ÁSZF)"
        text={`Hatályos: 2025. 09. 10. · Szolgáltató: ${site.name} · Székhely: ${site.hq} · Cégjegyzékszám: ${site.companyId} · adószám: ${site.taxId}`}
      />
      <section className="py-20 md:py-28">
        <Container className="prose-legal max-w-3xl space-y-8 text-muted">
          <p>
            E-mail: {site.email} · Telefon: {site.phone}
          </p>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">1. Általános rendelkezések</h2>
            <p>
              1.1. Jelen ÁSZF a K-roy Electricity Kft. (a továbbiakban: „Szolgáltató”) weboldalán
              keresztül megrendelt villanyszerelési szolgáltatásokra vonatkozik.
            </p>
            <p className="mt-3">
              1.2. A szolgáltatás megrendelésével a Megrendelő (a továbbiakban: „Vásárló”)
              elfogadja a jelen ÁSZF-et, amely a Szolgáltató és a Vásárló közötti jogviszony
              alapját képezi.
            </p>
            <p className="mt-3">
              1.3. Az ÁSZF elérhető a weboldalon, folyamatosan naprakész, és a Vásárló részére
              letölthető PDF formátumban is elérhető.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">
              2. Megrendelés és szerződés létrejötte
            </h2>
            <p>
              2.1. A Vásárló a weboldalon keresztül tudja leadni megrendelését, az űrlap
              kitöltésével és elküldésével.
            </p>
            <p className="mt-3">
              2.2. A megrendelés a Szolgáltató visszaigazolásával válik érvényessé, amely történhet
              e-mailben vagy telefonon.
            </p>
            <p className="mt-3">
              2.3. A szerződés írásban jön létre, elektronikus formában, a megrendelés és
              visszaigazolás alapján.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">3. Szolgáltatás teljesítése</h2>
            <p>
              3.1. A Szolgáltató a megrendelt villanyszerelési szolgáltatást a visszaigazolásban
              megadott időpontban teljesíti, a mindenkori szakmai előírásoknak megfelelően.
            </p>
            <p className="mt-3">
              3.2. A szolgáltatás teljesítésének helye: a Vásárló által megadott cím Magyarországon
              belül.
            </p>
            <p className="mt-3">
              3.3. A Szolgáltató fenntartja a jogot a szolgáltatás technikai okok miatti
              elhalasztására vagy módosítására, amelyről a Vásárlót haladéktalanul értesíti.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">4. Ár, fizetés és számlázás</h2>
            <p>
              4.1. Az árak a weboldalon feltüntetett bruttó árak, forintban értendők, tartalmazzák
              az ÁFÁ-t.
            </p>
            <p className="mt-3">4.2. Fizetési módok: banki átutalás, készpénz, online fizetési rendszerek.</p>
            <p className="mt-3">
              4.3. A szolgáltatásról számlát állítunk ki, amelyet a jogszabályoknak megfelelően
              legalább 8 évig megőrzünk.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">5. Elállási jog</h2>
            <p>5.1. Elállási jog szolgáltatás esetén:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                A Vásárlónak 14 napos elállási joga van a szolgáltatás megrendelésétől számítva, ha
                a szolgáltatás még nem kezdődött el a helyszínen.
              </li>
              <li>
                „Még nem kezdődött el” azt jelenti, hogy a Szolgáltató még nem indította el a
                munkát a megadott címen.
              </li>
              <li>
                Ha a szolgáltatás már elkezdődött a helyszínen, a 14 napos elállási jog nem vehető
                igénybe teljes egészében.
              </li>
              <li>
                Ebben az esetben a Vásárló csak a még el nem végzett munka díját nem fizeti, a már
                teljesített munkát viszont ki kell fizetnie.
              </li>
            </ul>
            <p className="mt-3">
              5.2. Az elállási jogot írásban (e-mail: {site.email}) lehet gyakorolni.
            </p>
            <p className="mt-3">
              5.3. Az elállás esetén a Vásárlónak a fizetett díjat visszatérítjük 14 napon belül,
              banki átutalással.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">6. Panaszkezelés</h2>
            <p>6.1. A Vásárló panasszal élhet e-mailben vagy telefonon.</p>
            <p className="mt-3">6.2. A Szolgáltató köteles 30 napon belül érdemi választ adni.</p>
            <p className="mt-3">
              6.3. Fogyasztóvédelmi jogvita esetén a Vásárló a NAIH-hoz, a fogyasztóvédelmi
              hatósághoz vagy a GVH-hoz fordulhat.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">7. Felelősség és kizárások</h2>
            <p>
              7.1. A Szolgáltató nem felel a Vásárló hibás adatszolgáltatásából eredő károkért.
            </p>
            <p className="mt-3">
              7.2. A Szolgáltató nem vállal felelősséget harmadik fél által okozott károkért (pl.
              áramszolgáltató, alvállalkozó).
            </p>
            <p className="mt-3">
              7.3. A Szolgáltató fenntartja a jogot a szolgáltatás módosítására vagy
              megszüntetésére, ha azt vis maior vagy jogszabályváltozás indokolja.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">8. Adatkezelés és GDPR</h2>
            <p>
              8.1. A Szolgáltató a Vásárló személyes adatait a szolgáltatás teljesítéséhez,
              számlázáshoz és jogszabályi kötelezettségek teljesítéséhez kezeli.
            </p>
            <p className="mt-3">
              8.2. Az adatkezelés a GDPR, az Infotv. és a számviteli szabályoknak megfelelően
              történik.
            </p>
            <p className="mt-3">
              8.3. A Vásárló jogai: hozzáférés, helyesbítés, törlés, kezelés korlátozása,
              tiltakozás, panasz a NAIH-nál.
            </p>
            <p className="mt-3">
              8.4. Részletes adatkezelési tájékoztató: az Adatkezelés oldalon.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">9. Vegyes rendelkezések</h2>
            <p>
              9.1. A jelen ÁSZF-ben nem szabályozott kérdésekben a hatályos magyar jogszabályok
              irányadóak.
            </p>
            <p className="mt-3">
              9.2. A vitás kérdésekben a Szolgáltató székhelye szerinti bíróság rendelkezik
              illetékességgel.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">
              10. Kapacitás lekötési díj és visszamondás
            </h2>
            <p>
              10.1. Amennyiben a Vásárló a szolgáltatást a megadott teljesítési időpont előtt
              visszamondja, és a Szolgáltató már lekötötte az erőforrásokat, a Vásárló köteles a
              Szolgáltató részére kapacitás lekötési díjat fizetni.
            </p>
            <p className="mt-3">
              10.2. A kapacitás lekötési díj mértéke: a megrendelt szolgáltatás 50%-a, amely a
              visszamondás időpontjától függően arányosan csökkenthető, amennyiben a Szolgáltató
              más ügyfél számára a lekötött időt fel tudja használni.
            </p>
            <p className="mt-3">
              10.3. Ha a Szolgáltató a helyszínen akadályba ütközik, amely a Vásárlótól független,
              és emiatt a szolgáltatás nem teljesíthető, a Vásárló köteles a teljesített
              előkészületek és kapacitás lekötése alapján arányos díjat megfizetni.
            </p>
            <p className="mt-3">
              10.4. A kapacitás lekötési díj nem haladhatja meg a megrendelt szolgáltatás teljes
              díját, és a Szolgáltató köteles részletes elszámolást készíteni.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
