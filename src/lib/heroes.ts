import type { StaticImageData } from "next/image";
import electrician from "../../public/images/hero-electrician.jpg";
import cabinet from "../../public/images/elosztoszekreny.jpeg";
import eloszto from "../../public/images/epulet-fo-eloszto.jpg";
import siteWork from "../../public/images/gallery/g53.jpg";
import career from "../../public/images/portfolio-karbantartas.jpg";

export const heroImages = {
  electrician,
  cabinet,
  eloszto,
  siteWork,
  career,
} as const satisfies Record<string, StaticImageData>;
