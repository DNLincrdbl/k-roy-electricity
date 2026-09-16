import type { Metadata } from "next";
import { MailForm } from "@/components/MailForm";
import { Container, HeroButton, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Karrier",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        kicker="Csatlakozz"
        title="Jelentkezési űrlap"
        text="Kérjük, adja meg adatait, és a lehető leghamarabb felvesszük Önnel a kapcsolatot."
        image={{
          src: "/images/portfolio-karbantartas.jpg",
          alt: "Ipari kivitelezés",
        }}
      >
        <HeroButton href="#jelentkezes">Jelentkezés</HeroButton>
        <HeroButton href="/rolunk" variant="ghost">
          Rólunk
        </HeroButton>
      </PageHero>

      <section id="jelentkezes" className="py-20 md:py-28">
        <Container>
          <div className="rounded-[24px] bg-surface p-6 md:p-10">
            <MailForm
              columns={2}
              subject="Karrier jelentkezés – K-roy Electricity"
              submitLabel="Űrlap elküldése"
              fields={[
                { name: "nev", label: "Név", required: true },
                { name: "email", label: "E-mail", type: "email", required: true },
                { name: "telefon", label: "Telefonszám", type: "tel", required: true },
                {
                  name: "jellege",
                  label: "Foglalkoztatás jellege",
                  type: "select",
                  required: true,
                  options: [
                    "Főállású munkalehetőség",
                    "Alkalmi munka",
                    "Projekt munka",
                    "Alvállalkozó",
                  ],
                },
                {
                  name: "pozicio",
                  label: "Betöltendő pozíció",
                  type: "radio",
                  required: true,
                  options: [
                    "tapasztalt villanyszerelő",
                    "kezdő villanyszerelő",
                    "villanyszerelő segéd",
                    "építőipari segéd",
                  ],
                },
                {
                  name: "bemutatkozas",
                  label: "Bemutatkozás rövid leírása, telefonszám",
                  type: "textarea",
                },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
