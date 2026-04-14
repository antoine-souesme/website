"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topNav = [
    { label: "Accueil", href: "/" },
    { label: "Freelance", href: "/developpeur-freelance-bretagne" },
    {
      label: "Site internet",
      href: "/creation-site-internet-sur-mesure-bretagne",
    },
    {
      label: "Logiciel",
      href: "/developpement-logiciel-sur-mesure-bretagne",
    },
  ];

  const sectionNav = [
    { label: "À propos", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-7">
            <Link
              href="/"
              className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              AS
            </Link>

            <div className="hidden xl:flex items-center gap-5">
              {topNav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {sectionNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#contact"
            className="px-5 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-sm font-semibold"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
