export const site = {
  name: "K-roy Electricity Kft.",
  shortName: "K-roy Electricity",
  tagline: "Papírt sokan adnak, valós műszaki tartalmat kevesen",
  qualityQuote:
    "Vállalkozásom első sorban a minőségi és nem pedig a mennyiségi munkát tartja előnyben",
  owner: "Tóth Károly",
  role: "Ügyvezető",
  email: "info@k-roy-electricity.hu",
  phone: "+36-30-2-285-284",
  phoneHref: "tel:+36302285284",
  address: "6000 Kecskemét, Halasi út 29. Fsz. 117.",
  hq: "6000 Kecskemét, Fürj utca 6.",
  companyId: "03 09 139199",
  taxId: "32773389-2-03",
  hours: "Hétfő – Péntek: 7:30–17:00",
  weekend: "Szombat: zárva · Vasárnap: zárva",
  travel:
    "Kiszállási díj: Kecskemét területén ingyenes, külterületen nettó 180 Ft + ÁFA / km",
  facebook: "https://www.facebook.com/K-ROY-Electricity-476998866009080/",
  instagram: "https://www.instagram.com/k_roy_electricity/",
  partner: { name: "Daniella", href: "https://daniella.hu/" },
} as const;

export const nav = [
  { href: "/", label: "Kezdőlap" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/vbf", label: "VBF" },
  { href: "/referenciak", label: "Referenciák" },
  { href: "/kapcsolat", label: "Kapcsolat" },
  { href: "/karrier", label: "Karrier" },
] as const;

export const services = [
  {
    slug: "vbf",
    title: "VBF / VVF felülvizsgálat",
    text: "Ingatlan adás-vétel, bérbeadás, időszakos felülvizsgálat, első üzembehelyezési felülvizsgálat, vitás ügyek: állapotfelmérő tényvázlat.",
    href: "/vbf",
  },
  {
    slug: "karbantartas",
    title: "Karbantartás",
    text: "Alkalomszerű és időszakos karbantartások lakossági és ipari környezetben egyaránt.",
  },
  {
    slug: "eloszto",
    title: "Elosztótáblák cseréje",
    text: "Korszerűtlen és a jelenkori szabályozásnak nem megfelelő, ugyanakkor szakszerűtlenül épített elosztó berendezések cseréje.",
  },
  {
    slug: "vilagitas",
    title: "Világítás",
    text: "Új és meglévő világítások szerelése, korszerűsítése, kivitelezése, karbantartása.",
  },
  {
    slug: "ellenorzes",
    title: "Ellenőrzés",
    text: "Elektromos hálózat átvizsgálása és vezetékek / kábelek terhelhetőségének ellenőrzése.",
  },
  {
    slug: "gyorsszolgalat",
    title: "Gyorsszolgálat",
    text: "S.O.S. hiba esetén a helyzetnek megfelelő felszereléssel érkezünk.",
  },
  {
    slug: "halozat",
    title: "Hálózat bekötése",
    text: "Elmenő mért fővezeték bekötése, cseréje plombabontás ügyintézéssel.",
  },
  {
    slug: "kabelnyomvonal",
    title: "Kábelnyomvonal",
    text: "Földkábel nyomvonal kitűzése, kábelárok kiásása földmunkagéppel, kábelfűző aknák telepítése.",
  },
  {
    slug: "led",
    title: "LED technológia",
    text: "Fő- és dekorvilágítások kivitelezése, vezérlések készítése minőségi termékekkel.",
  },
  {
    slug: "vezerlesek",
    title: "Vezérlések",
    text: "Okostelefonnal és kezelőegységekkel való irányítások, szabályozások és automata rendszerek telepítése.",
  },
  {
    slug: "emelokosar",
    title: "Emelőkosaras munkavégzés",
    text: "Magasban való munkavégzés: külső-belső világítások, kábeltálcázás, kábelezések.",
  },
  {
    slug: "kapuk",
    title: "Elektromos kapuk",
    text: "Kapumozgató motorok és vezérlők felszerelése, cseréje.",
  },
  {
    slug: "tuzgatlok",
    title: "Tűzgátló tömítések",
    text: "Tűzgátló tömítések beépítését, felülvizsgálatát, karbantartását, javítását végezzük.",
  },
] as const;

export const clients = [
  {
    name: "Maspex Olympos",
    text: "Élelmiszeripari és italgyártó vállalat számára biztosítottunk villamos kivitelezési szolgáltatásokat.",
  },
  {
    name: "Szikrai Borászati Kft.",
    text: "Élelmiszeripari és italgyártó vállalat számára biztosítottunk villamos kivitelezési szolgáltatásokat és karbantartást.",
  },
  {
    name: "DPD Hungary Kft.",
    text: "Futár- és csomaglogisztikai depó teljes villamos hálózatának kiépítése.",
  },
  {
    name: "Nissin Food Kft.",
    text: "Nemzetközi élelmiszeripari szereplő részére végeztünk parkolóbővítésnél világítás kiépítését.",
  },
  {
    name: "TV2",
    text: "Médiaszolgáltatónál végeztünk vezérlőszekrény telepítését.",
  },
  {
    name: "Profitrans Property Kft.",
    text: "Ingatlan- és logisztikai projektekben való részvétel, hosszú távú, stabil üzleti kapcsolat keretében karbantartásokat végeztünk a telephelyen.",
  },
  {
    name: "Naturland Magyarország Kft.",
    text: "Egészség- és gyógynövényipari termékekkel foglalkozó vállalat számára nyújtottunk szolgáltatást.",
  },
  {
    name: "Royal Sluis Magroveg Group Kft.",
    text: "Zöldség- és gyümölcsipari partner, akinek villamos hálózat rekonstrukciót és időszakos karbantartást végzünk, valamint egy új raktárcsarnok teljes villamos kivitelezése.",
  },
  {
    name: "Zöldségmag Kft.",
    text: "Mezőgazdasági és vetőmag szektorban működő cég, akinek megbízható, hosszú távú együttműködés keretében biztosítottunk támogatást.",
  },
  {
    name: "Optical Kft.",
    text: "Kamionokhoz és tehergépjárművekhez kapcsolódó alkatrészek, tartozékok és felszerelések értékesítése, ahol teljeskörű kivitelezést végeztünk éves karbantartással, hosszú távú partnerként üzemelünk.",
  },
  {
    name: "Polar Stúdió 2 Kft.",
    text: "Ipari projektekben alvállalkozóként vettünk részt az Univer Product Zrt. új gyártóüzemének kialakításában és a VGP Park Kecskemét Kft. új raktárcsarnok kiépítésében.",
  },
  {
    name: "Lake Forrest Villapark",
    text: "Ingatlanfejlesztési projekt, ahol prémium színvonalú, megbízható szolgáltatásokkal támogattuk a fejlesztés sikerét.",
  },
  {
    name: "Bosch Kecskemét",
    text: "Vezérlőszekrény telepítése és gyártása.",
  },
  {
    name: "Galvan Systems Kft.",
    text: "Ipari és felületkezelési területen működő vállalat, akivel hosszú távú, szakmailag megalapozott együttműködés valósult meg.",
  },
] as const;

export const portfolio = [
  {
    src: "/images/portfolio-karbantartas.jpg",
    title: "Karbantartás",
  },
  {
    src: "/images/portfolio-automata.jpg",
    title: "Ipari automatizálás",
  },
  {
    src: "/images/portfolio-vbf.jpg",
    title: "VBF, VVF",
  },
  {
    src: "/images/portfolio-led.jpg",
    title: "LED technológia",
  },
] as const;

export const quoteItems = [
  "Munka pontos leírása az előzetes megbeszélés alapján",
  "Szolgáltatás technikai paraméterei",
  "Munka várható kezdete és vége",
  "Tételesen kiírt anyagszükséglet",
  "Árajánlaton kívül eső rezsióradíjak",
  "Szerződésen kívül eső pótmunkadíjak",
  "Egyéb járulékos költségek",
] as const;

export const maintenanceNotes = [
  "A karbantartási díj függ a hely méretétől és rendeltetésétől.",
  "Az elvégzendő feladatok idejét mindig a megrendelővel egyeztetjük.",
  "Nem csak hiba esetén érkezünk a helyszínre, hanem igény esetén időszakosan átvizsgáljuk a területet. Ennek a szolgáltatásnak külön feltüntetett díja van.",
  "Amennyiben a termelés, gyártás, műszakbeosztás nem engedi a normál munkaidőben való munkavégzést, külön kijelölt napon és időben is tudjuk végezni a kijelölt feladatokat felár ellenében.",
] as const;

export const emergencyPackages = [
  {
    title: "Azonnali beavatkozás",
    text: "A hiba bejelentését követően jelenlegi tartózkodási helyünkről 1 órán belül indulunk. Az érkezés idejét a távolság és a forgalom határozza meg. Figyelem: amennyiben épp azonnali hibaelhárítást végzünk, nem tudjuk garantálni az azonnali indulást.",
  },
  {
    title: "3 órás intervallum",
    text: "Nincs veszélyben sem emberi élet, sem vagyontárgy, de a meghibásodás ennél több ideig nem állhat fenn. Ilyenkor 3 órán belül kiérünk a helyszínre.",
  },
  {
    title: "5 órás intervallum",
    text: "Nincs veszélyben sem emberi élet, sem vagyontárgy, de a meghibásodás ennél több ideig nem állhat fenn. Ilyenkor 5 órán belül kiérünk a helyszínre.",
  },
  {
    title: "24 órás intervallum",
    text: "Nincs veszélyben sem emberi élet, sem vagyontárgy, de a meghibásodás ennél több ideig nem állhat fenn. Ilyenkor 24 órán belül kiérünk a helyszínre.",
  },
] as const;
