"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();

  return (
    path !== "/" && (
      <footer className="text-center py-3 mt-20">
        Made By 💖 Osama Mohammed
      </footer>
    )
  );
}
