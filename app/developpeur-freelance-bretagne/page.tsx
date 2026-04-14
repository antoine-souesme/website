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
    question: "Quel est l'avantage d'un developpeur freelance en Bretagne ?",
    answer:
      "Vous beneficiez d'un interlocuteur unique, d'une forte reactivite et d'un accompagnement sur mesure pour votre projet.",
  },
  {
    question: "Intervenez-vous en Centre Bretagne ?",
    answer:
      "Oui, j'interviens principalement en Centre Bretagne, notamment autour de Pontivy, Loudeac, Carhaix et Rostrenen.",
  },
  {
    question: "Pouvez-vous rejoindre une equipe existante ?",
    answer:
      "Oui, en renfort temporaire ou sur la duree, avec integration aux outils et au cadre de travail existants.",
  },
  {
    question: "Quels types de missions freelance proposez-vous ?",
    answer:
      "Creation de sites internet, developpement de logiciels metier, amelioration de performances et accompagnement technique.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Developpeur freelance Bretagne et Centre Bretagne",
  description:
    "Developpeur freelance en Bretagne et Centre Bretagne. Accompagnement technique sur mesure pour sites internet et logiciels.",
  path,
  keywords: [
    "developpeur freelance bretagne",
    "developpeur centre bretagne",
    "freelance web bretagne",
    "renfort developpement bretagne",
    "developpeur sur mesure",
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
            { name: "Developpeur freelance Bretagne", path },
          ]),
        ]}
      />
      <Navbar />
      <SeoServicePage
        eyebrow="Freelance Bretagne"
        h1="Developpeur freelance en Bretagne et Centre Bretagne"
        intro="Je vous accompagne pour accelerer vos projets digitaux avec une approche pragmatique: objectifs clairs, execution rapide et qualite technique durable."
        primaryKeyword="developpeur freelance bretagne"
        secondaryKeywords={[
          "developpeur centre bretagne",
          "freelance web",
          "accompagnement technique",
          "developpement sur mesure",
        ]}
        offers={[
          "Renfort d'equipe sur une periode ciblee",
          "Prise en charge complete d'un lot fonctionnel",
          "Refonte technique et amelioration de la maintenabilite",
          "Mise en place d'une base solide pour la suite du projet",
        ]}
        localValuePoints={[
          "Connaissance du tissu economique local",
          "Echanges simples, en presentiel ou a distance",
          "Pilotage oriente resultat pour TPE, PME et equipes produit",
          "Capacite a intervenir rapidement selon les priorites",
        ]}
        faqItems={faqItems}
        ctaLabel="Besoin d'un developpeur freelance pour renforcer votre equipe ?"
      />
      <Footer />
    </div>
  );
}
