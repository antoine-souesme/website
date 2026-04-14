"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-underwater-bg absolute inset-0" />
        <div className="hero-water-surface absolute inset-0" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto pt-24 pb-16">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sky-200 mb-4">
            Développeur freelance en Centre Bretagne
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Site internet et logiciel sur mesure pour entreprises en Bretagne
          </h1>

          <p className="text-lg md:text-2xl text-slate-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            J&apos;aide les entreprises à concevoir, développer et faire évoluer des
            solutions digitales utiles, performantes et maintenables.
          </p>

          <p className="text-slate-300 mb-8">
            10 ans d&apos;expérience, premier retour sous 24h, accompagnement
            freelance de bout en bout.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Link
              href="/creation-site-internet-sur-mesure-bretagne"
              className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full border border-blue-400/40 hover:bg-blue-500/30 transition-all duration-300"
            >
              Création de site internet
            </Link>
            <Link
              href="/developpement-logiciel-sur-mesure-bretagne"
              className="px-4 py-2 bg-emerald-500/20 text-emerald-200 rounded-full border border-emerald-400/40 hover:bg-emerald-500/30 transition-all duration-300"
            >
              Développement logiciel sur mesure
            </Link>
            <Link
              href="/developpeur-freelance-bretagne"
              className="px-4 py-2 bg-indigo-500/20 text-indigo-200 rounded-full border border-indigo-400/40 hover:bg-indigo-500/30 transition-all duration-300"
            >
              Développeur freelance Bretagne
            </Link>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-linear-to-b from-sky-500 to-sky-900 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Démarrer mon projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
