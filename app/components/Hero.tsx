"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = bubblesRef.current;
    if (!root) return;
    const N = 18;
    for (let i = 0; i < N; i++) {
      const b = document.createElement("div");
      b.className = "bubble";
      const size = 4 + Math.random() * 14;
      const left = Math.random() * 100;
      const delay = -Math.random() * 16;
      const duration = 14 + Math.random() * 16;
      const drift = (Math.random() * 6 - 3) + "vw";
      b.style.width = b.style.height = size + "px";
      b.style.left = left + "%";
      b.style.animationDelay = delay + "s";
      b.style.animationDuration = duration + "s";
      b.style.setProperty("--drift", drift);
      root.appendChild(b);
    }
    return () => {
      root.innerHTML = "";
    };
  }, []);

  return (
    <>
    <header
      className="relative overflow-hidden text-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 hero-water" />
      <div className="absolute inset-0 water-surface" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="sun" />
        <div className="ray r1" />
        <div className="ray r2" />
        <div className="ray r3" />
        <div className="ray r4" />
        <div className="ray r5" />
      </div>
      <div className="bubbles" ref={bubblesRef} />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(0,0,0,0.35), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <p className="eyebrow text-sand-300 mb-6">
          Développeur freelance — Centre Bretagne
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-5xl">
          Site internet et logiciel{" "}
          <span className="italic text-sand-300">sur mesure</span> pour les
          entreprises de Bretagne.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
          J&apos;aide les entreprises à concevoir, développer et faire évoluer
          des solutions digitales utiles, performantes et maintenables.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-sand-300 text-ink-900 rounded-full font-medium hover:bg-sand-200 transition shadow-lg shadow-black/20"
          >
            Démarrer mon projet
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-0.5 transition"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <div className="text-sm text-white/75 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            Disponible — premier retour sous 24h
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px max-w-3xl border-t border-white/15">
          <Link
            href="/creation-site-internet-sur-mesure-bretagne"
            className="flex items-center justify-between py-5 pr-6 group"
          >
            <span className="text-white/90 text-sm">
              Création de site internet
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link
            href="/developpement-logiciel-sur-mesure-bretagne"
            className="flex items-center justify-between py-5 pr-6 sm:pl-6 sm:border-l border-white/15 group"
          >
            <span className="text-white/90 text-sm">Logiciel sur mesure</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link
            href="/developpeur-freelance-bretagne"
            className="flex items-center justify-between py-5 pr-6 sm:pl-6 sm:border-l border-white/15 group"
          >
            <span className="text-white/90 text-sm">Freelance Bretagne</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs flex flex-col items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
    <div className="shore" />
    </>
  );
};

export default Hero;
