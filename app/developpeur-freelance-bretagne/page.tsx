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
  title: "Développeur freelance en renfort d'équipe en Bretagne",
  description:
    "Développeur freelance en Bretagne pour renforcer votre équipe technique : prise en charge de fonctionnalités, intégration à vos outils et à votre façon de travailler.",
  path,
  keywords: [
    "développeur freelance bretagne",
    "renfort équipe développement",
    "mission freelance développeur",
    "développeur centre bretagne",
    "freelance web bretagne",
    "renfort développement bretagne",
    "développeur sur mesure",
  ],
});

export default function DeveloppeurFreelanceBretagnePage() {
  return (
    <>
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
        h1="Développeur freelance en renfort de votre équipe en Bretagne"
        intro="Votre équipe a plus de travail que de bras ? Je la rejoins le temps d'une mission pour prendre en charge des fonctionnalités de bout en bout, dans vos outils et à votre rythme."
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
        caseStudy={{
          eyebrow: "Mission réalisée",
          title: "Renfort de l'équipe technique de Cool Cars",
          context:
            "Cool Cars gère des flottes de véhicules proposés à la location. J'ai rejoint son équipe de développement pour faire avancer la plateforme en parallèle des autres développeurs.",
          deliverables: [
            "Prise en main d'une base de code existante et de ses règles de travail",
            "Développement de fonctionnalités complètes, de l'interface jusqu'au serveur",
            "Travail en commun avec l'équipe : relectures de code et corrections suite aux retours",
            "Livraisons régulières, fonctionnalité par fonctionnalité",
          ],
          stack: ["Vue.js", "TypeScript", "Firebase", "Fastify"],
        }}
        faqItems={faqItems}
        ctaLabel="Besoin d'un développeur freelance pour renforcer votre équipe ?"
      />
      <Footer />
    </>
  );
}
