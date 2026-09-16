import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adatkezelés",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="GDPR"
        title="Adatkezelési tájékoztató"
        text={`Hatályos: 2025. 09. 10. A ${site.name} kiemelten kezeli a személyes adatok védelmét.`}
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-8 text-muted">
          <p>
            Jelen tájékoztató célja, hogy a weboldal és a promóciós játék során kezelt személyes
            adatokról, azok kezelésének céljáról, jogalapjáról, időtartamáról és az érintettek
            jogairól részletes információt nyújtson.
          </p>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">1. Adatkezelő adatai</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Név: {site.name}</li>
              <li>Székhely: {site.address}</li>
              <li>Kapcsolattartó e-mail: {site.email}</li>
              <li>Telefonszám: {site.phone}</li>
            </ul>
            <p className="mt-3">
              Az adatkezelő a weboldalon és promóciós játékokban kezelt személyes adatokért felel.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">
              2. Kezelt adatok köre és célja
            </h2>
            <h3 className="mt-4 font-medium text-foreground">2.1 Weboldal működése és sütik</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Szükséges sütik: a weboldal alapvető működéséhez.</li>
              <li>Funkcionális sütik: a felhasználói élmény javításához.</li>
              <li>Teljesítmény sütik: látogatottság elemzéséhez.</li>
              <li>
                Marketing/harmadik fél sütik: statisztikai és reklámcélokra (csak a felhasználó
                hozzájárulásával).
              </li>
            </ul>
            <h3 className="mt-4 font-medium text-foreground">2.2 Kapcsolatfelvételi űrlap</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Név, e-mail cím, telefonszám.</li>
              <li>Cél: érdeklődésre válaszadás, árajánlat biztosítása.</li>
            </ul>
            <h3 className="mt-4 font-medium text-foreground">2.3 Promóciós játékok</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Név, elérhetőség (telefon, e-mail), számlázási adatok.</li>
              <li>
                Cél: játék lebonyolítása, nyeremények átadása, jogi kötelezettségek teljesítése.
              </li>
            </ul>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">3. Jogalap az adatkezeléshez</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Sütik kezelése: felhasználó önkéntes hozzájárulása (GDPR 6. cikk a) pont).</li>
              <li>
                Szolgáltatás teljesítése: pl. játék lebonyolítása, nyeremény átadása (GDPR 6. cikk
                b) pont).
              </li>
              <li>
                Jogi kötelezettség teljesítése: számlaadatok megőrzése a számviteli törvénynek
                megfelelően (GDPR 6. cikk c) pont).
              </li>
            </ul>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">4. Adattárolás időtartama</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Sütik: a felhasználó beállítása vagy lejárat idejéig.</li>
              <li>Kapcsolatfelvételi adatok: a kérdés megválaszolásáig, max. 1 év.</li>
              <li>Számlaadatok: legalább 8 év (számviteli törvény).</li>
              <li>
                Promóciós játék adatok: a nyeremény átadásáig, illetve a jogszabályban előírt
                megőrzési időig.
              </li>
            </ul>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">5. Az érintettek jogai</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>hozzáférés személyes adataikhoz</li>
              <li>adatok helyesbítése, kiegészítése</li>
              <li>adatok törlése (amennyiben nincs jogi megőrzési kötelezettség)</li>
              <li>kezelés korlátozása</li>
              <li>tiltakozás az adatkezelés ellen (különösen marketing célokra)</li>
              <li>
                panasz benyújtása a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH)
              </li>
            </ul>
            <p className="mt-3">Az igényeket az {site.email} e-mail címen kell benyújtani.</p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">6. Adatbiztonság</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                technikai intézkedések: titkosított adattárolás, jelszóval védett rendszerek,
                hozzáférés-korlátozás
              </li>
              <li>
                szervezési intézkedések: csak az arra jogosult munkatársak férhetnek hozzá az
                adatokhoz
              </li>
            </ul>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">7. Adatfeldolgozók</h2>
            <p>
              Ha a Szervező külső szolgáltatókat vesz igénybe (pl. IT, marketing, könyvelés), az
              adatkezelésre adatfeldolgozói szerződés vonatkozik. Az adatfeldolgozók kizárólag a
              Szervező utasításai szerint kezelhetik az adatokat.
            </p>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">8. Adatvédelmi incidensek</h2>
            <p>Adatszivárgás vagy egyéb adatvédelmi incidens esetén a Szervező:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>72 órán belül értesíti a NAIH-t</li>
              <li>szükség esetén értesíti az érintetteket a kockázat minimalizálása érdekében</li>
            </ul>
          </article>
          <article>
            <h2 className="font-display mb-3 text-[24px] font-medium text-foreground">9. Jogszabályi hivatkozások</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>GDPR (EU 2016/679)</li>
              <li>Infotv. (2011. évi CXII. törvény)</li>
              <li>Számviteli törvény (számlák megőrzése)</li>
              <li>Vonatkozó fogyasztóvédelmi szabályok</li>
            </ul>
          </article>
        </Container>
      </section>
    </>
  );
}
