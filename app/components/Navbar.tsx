"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Méthode", href: "/#methode" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  const onCream = !hasDarkHero || isScrolled || isMenuOpen;
  const closeMenu = () => setIsMenuOpen(false);

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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
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

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-current/30 hover:bg-current/5 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-ink-900/10 px-6 pb-6"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 font-display text-2xl border-b border-ink-900/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
