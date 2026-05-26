"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  const onCream = !hasDarkHero || isScrolled;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        onCream ? "nav-cream text-ink-900" : "text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-current">
          <span className="w-8 h-8 rounded-full bg-sand-400 grid place-items-center text-ink-900 font-display text-lg">
            A
          </span>
          <span className="font-display text-lg leading-none">
            Antoine Souesme
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm">
          <Link href="/#about" className="opacity-80 hover:opacity-100">
            À propos
          </Link>
          <Link href="/#services" className="opacity-80 hover:opacity-100">
            Services
          </Link>
          <Link href="/#methode" className="opacity-80 hover:opacity-100">
            Méthode
          </Link>
          <Link href="/#faq" className="opacity-80 hover:opacity-100">
            FAQ
          </Link>
        </div>

        <Link
          href="/#contact"
          className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded-full border border-current/30 hover:bg-current/5 transition"
        >
          Me contacter
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
