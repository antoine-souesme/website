import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StructuredData from "../components/StructuredData";
import {
  breadcrumbSchema,
  buildPageMetadata,
  faqSchemaFromItems,
  personSchema,
  professionalServiceSchema,
} from "../lib/seo";

const path = "/tarifs";

const offers = [
  {
    eyebrow: "Site vitrine",
    price: "900 à 1 350 € HT",
    unit: "environ",
    description:
      "Un site pour présenter votre activité, vos services et vous faire contacter.",
    details: [
      "2 à 3 jours de développement",
      "Site rapide et adapté au mobile",
      "Bases du référencement sur Google",
      "Mise en ligne",
    ],
    ctaLabel: "Me parler de votre site",
  },
  {
    eyebrow: "Site ou logiciel métier",
    price: "Sur devis",
    unit: "",
    description:
      "Un site sur mesure ou un outil métier conçu autour de votre façon de travailler.",
    details: [
      "Analyse de votre besoin",
      "Chiffrage détaillé en jours de développement",
      "Livraison par étapes",
      "Évolutions possibles dans le temps",
    ],
    ctaLabel: "Demander un devis",
  },
  {
    eyebrow: "Maintenance",
    price: "29,90 € HT",
    unit: "à partir de, par mois",
    description: "Pour garder votre site à jour sans vous en occuper.",
    details: [
      "Petites corrections",
      "Modifications de textes",
      "Petits ajustements de mise en page",
      "Nouvelles fonctionnalités sur devis",
    ],
    ctaLabel: "Ajouter la maintenance",
  },
];

const faqItems = [
  {
    question: "Combien coûte un site vitrine ?",
    answer:
      "Un site vitrine demande environ 2 à 3 jours de développement, soit environ 900 à 1 350 € HT sur la base de 450 € HT par jour.",
  },
  {
    question:
      "Comment est calculé le prix d'un site ou d'un logiciel sur mesure ?",
    answer:
      "Je détaille votre besoin en fonctionnalités, j'estime le nombre de jours nécessaires, puis j'applique mon tarif de 450 € HT par jour. Vous recevez un devis précis avant de démarrer.",
  },
  {
    question: "Que comprend la maintenance à partir de 29,90 € HT par mois ?",
    answer:
      "Les petites corrections et les ajustements du quotidien, comme la modification d'un texte ou d'une image. Les nouvelles fonctionnalités font l'objet d'un devis séparé.",
  },
  {
    question: "Combien de temps pour recevoir un devis ?",
    answer:
      "Je m'engage à un premier retour sous 24h ouvrées pour cadrer votre besoin et vous proposer la suite.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs : site internet et logiciel sur mesure en Bretagne",
  description:
    "Tarifs d'un développeur freelance en Bretagne : 450 € HT par jour, site vitrine d'environ 900 à 1 350 € HT, logiciel métier sur devis, maintenance à partir de 29,90 € HT par mois.",
  path,
  keywords: [
    "prix site internet bretagne",
    "tarif développeur freelance",
    "combien coûte un site vitrine",
    "devis logiciel sur mesure",
    "maintenance site internet",
  ],
});

export default function TarifsPage() {
  return (
    <>
      <StructuredData
        entries={[
          personSchema,
          professionalServiceSchema,
          faqSchemaFromItems(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Tarifs", path },
          ]),
        ]}
      />
      <Navbar />
      <main className="bg-sand-100 text-ink-900">
        <section className="pt-40 pb-20 px-6 bg-sand-100">
          <div className="max-w-5xl mx-auto">
            <p className="eyebrow mb-5">Tarifs</p>
            <h1 className="font-display text-5xl md:text-7xl serif-h2 mb-8 max-w-4xl">
              Combien coûte un site ou un logiciel{" "}
              <span className="serif-em">sur mesure</span> ?
            </h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed max-w-3xl">
              Mon tarif est de 450 € HT par jour de développement. Chaque projet
              est chiffré en nombre de jours, pour que vous sachiez exactement
              ce que vous payez.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-sand-50 border-y border-ink-900/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-px bg-ink-900/10 border border-ink-900/10 rounded-2xl overflow-hidden">
            {offers.map((offer) => (
              <article
                key={offer.eyebrow}
                className="bg-sand-50 p-8 flex flex-col"
              >
                <p className="eyebrow text-sand-500 mb-6">{offer.eyebrow}</p>
                {offer.unit && (
                  <p className="text-sm text-ink-500 mb-1">{offer.unit}</p>
                )}
                <p className="font-display text-4xl mb-4 leading-tight">
                  {offer.price}
                </p>
                <p className="text-ink-700 leading-relaxed mb-6">
                  {offer.description}
                </p>
                <ul className="space-y-2 text-sm text-ink-700 mb-8 flex-1">
                  {offer.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-sand-400 mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-ink-900 border-b border-ink-900/30 pb-1 self-start"
                >
                  {offer.ctaLabel}
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
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-sand-100">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <p className="eyebrow mb-4">Questions fréquentes</p>
              <h2 className="font-display text-4xl md:text-5xl serif-h2">
                Vos <span className="serif-em">questions</span> sur les prix.
              </h2>
            </div>

            <div className="border-t border-ink-900/10">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="border-b border-ink-900/10 group py-6"
                >
                  <summary className="cursor-pointer flex items-start justify-between gap-6">
                    <span className="font-display text-2xl md:text-3xl leading-snug">
                      {item.question}
                    </span>
                    <span className="faq-plus text-sand-500 text-3xl leading-none mt-1 font-light">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-ink-700 leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-[1fr_auto] items-center gap-8 paper rounded-2xl p-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-3">
                  Un projet en tête ?
                </h2>
                <p className="text-ink-700 leading-relaxed max-w-2xl">
                  Décrivez-moi votre besoin, je vous réponds sous 24h ouvrées
                  avec une première estimation.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-ink-900 text-sand-50 rounded-full font-medium hover:bg-ocean-700 transition self-start md:self-auto"
              >
                Demander un devis
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
