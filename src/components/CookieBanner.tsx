"use client";

import { useCallback, useSyncExternalStore } from "react";

const KEY = "kroy-cookies";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getSnapshot() {
  return window.localStorage.getItem(KEY) === null;
}

function getServerSnapshot() {
  return false;
}

export function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const accept = useCallback((value: string) => {
    window.localStorage.setItem(KEY, value);
    emit();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-white/95 p-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] text-muted">
          Sütiket használunk, hogy biztosítsuk a weboldal megfelelő működését és biztonságát,
          valamint hogy a lehető legjobb felhasználói élményt kínáljuk.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full bg-surface px-4 py-2 text-[14px] font-medium"
            onClick={() => accept("necessary")}
          >
            Csak a szükségesek
          </button>
          <button
            type="button"
            className="rounded-full bg-gold px-4 py-2 text-[14px] font-medium text-white hover:bg-gold-soft"
            onClick={() => accept("all")}
          >
            Összes elfogadása
          </button>
        </div>
      </div>
    </div>
  );
}
