import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://k-roy-electricity.hu"),
  title: {
    default: `${site.name} · Villanyszerelés Kecskemét`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "Villanyszerelés, ipari kivitelezés, VBF felülvizsgálat és automatizálás Kecskeméten. Valós műszaki tartalom, nem csak papír.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    locale: "hu_HU",
    type: "website",
    images: ["/images/hero-electrician.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${inter.variable} ${interTight.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
