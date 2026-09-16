import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { BootReveal } from "@/components/BootReveal";
import { ScrollToTop } from "@/components/ScrollToTop";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <BootReveal />
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
