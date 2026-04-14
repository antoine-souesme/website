import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SeoServicePage from "../components/SeoServicePage";
import StructuredData from "../components/StructuredData";
import {
  breadcrumbSchema,
  buildPageMetadata,
  faqSchemaFromItems,
  personSchema,
  professionalServiceSchema,
} from "../lib/seo";

const path = "/developpeur-freelance-bretagne";

const faqItems = [
  {
    question: "Quel est l'avantage d'un développeur freelance en Bretagne ?",
    answer:
      "Vous bénéficiez d'un interlocuteur unique, d'une forte réactivité et d'un accompagnement sur mesure pour votre projet.",
  },
  {
    question: "Intervenez-vous en Centre Bretagne ?",
    answer:
      "Oui, j'interviens principalement en Centre Bretagne, notamment autour de Pontivy, Loudéac, Carhaix et Rostrenen.",
  },
  {
    question: "Pouvez-vous rejoindre une équipe existante ?",
    answer:
      "Oui, en renfort temporaire ou sur la durée, avec intégration aux outils et au cadre de travail existants.",
  },
  {
    question: "Quels types de missions freelance proposez-vous ?",
    answer:
      "Création de sites internet, développement de logiciels métier, amélioration de performances et accompagnement technique.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Développeur freelance Bretagne et Centre Bretagne",
  description:
    "Développeur freelance en Bretagne et Centre Bretagne. Accompagnement technique sur mesure pour sites internet et logiciels.",
  path,
  keywords: [
    "développeur freelance bretagne",
    "développeur centre bretagne",
    "freelance web bretagne",
    "renfort développement bretagne",
    "développeur sur mesure",
  ],
});

export default function DeveloppeurFreelanceBretagnePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <StructuredData
        entries={[
          personSchema,
          professionalServiceSchema,
          faqSchemaFromItems(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Développeur freelance Bretagne", path },
          ]),
        ]}
      />
      <Navbar />
      <SeoServicePage
        eyebrow="Freelance Bretagne"
        h1="Développeur freelance en Bretagne et Centre Bretagne"
        intro="Je vous accompagne pour accélérer vos projets digitaux avec une approche pragmatique: objectifs clairs, exécution rapide et qualité technique durable."
        primaryKeyword="développeur freelance bretagne"
        secondaryKeywords={[
          "développeur centre bretagne",
          "freelance web",
          "accompagnement technique",
          "développement sur mesure",
        ]}
        offers={[
          "Renfort d'équipe sur une période ciblée",
          "Prise en charge complète d'un lot fonctionnel",
          "Refonte technique et amélioration de la maintenabilité",
          "Mise en place d'une base solide pour la suite du projet",
        ]}
        localValuePoints={[
          "Connaissance du tissu économique local",
          "Échanges simples, en présentiel ou à distance",
          "Pilotage orienté résultat pour TPE, PME et équipes produit",
          "Capacité à intervenir rapidement selon les priorités",
        ]}
        faqItems={faqItems}
        ctaLabel="Besoin d'un développeur freelance pour renforcer votre équipe ?"
      />
      <Footer />
    </div>
  );
}
