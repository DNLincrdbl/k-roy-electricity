import {
  ArrowUpFromLine,
  Cable,
  CircuitBoard,
  Cpu,
  DoorClosed,
  Flame,
  Gauge,
  Lightbulb,
  PanelsTopLeft,
  ShieldCheck,
  Siren,
  TowerControl,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  vbf: ShieldCheck,
  karbantartas: Wrench,
  eloszto: PanelsTopLeft,
  vilagitas: Lightbulb,
  ellenorzes: Gauge,
  gyorsszolgalat: Siren,
  halozat: Cable,
  kabelnyomvonal: TowerControl,
  led: CircuitBoard,
  vezerlesek: Cpu,
  emelokosar: ArrowUpFromLine,
  kapuk: DoorClosed,
  tuzgatlok: Flame,
};
