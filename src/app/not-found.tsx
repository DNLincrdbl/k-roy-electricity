import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-3 py-16 md:px-5">
      <div className="mx-auto flex min-h-[56vh] flex-col items-center justify-center rounded-[24px] bg-surface px-6 py-20 text-center md:rounded-[32px]">
        <p className="text-[14px] font-medium text-muted">404</p>
        <h1 className="font-display mt-4 text-[32px] font-medium md:text-[40px]">
          Az oldal nem található
        </h1>
        <Link
          href="/"
          className="mt-8 rounded-full bg-foreground px-8 py-2.5 text-[14px] font-medium text-white hover:bg-black"
        >
          Vissza a kezdőlapra
        </Link>
      </div>
    </section>
  );
}
