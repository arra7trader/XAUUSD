"use client";

import { useState } from "react";

type BookmarkToggleProps = {
  storageKey: string;
  label: string;
};

export function BookmarkToggle({ storageKey, label }: BookmarkToggleProps) {
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(storageKey) === "saved";
  });

  function toggleSaved() {
    const nextValue = !saved;
    setSaved(nextValue);
    window.localStorage.setItem(storageKey, nextValue ? "saved" : "idle");
  }

  return (
    <button
      type="button"
      onClick={toggleSaved}
      className="rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-sm text-amber-100 transition hover:bg-white/10"
    >
      {saved ? "Tersimpan" : label}
    </button>
  );
}
