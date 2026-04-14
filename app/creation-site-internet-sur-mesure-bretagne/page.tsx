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

const path = "/creation-site-internet-sur-mesure-bretagne";

const faqItems = [
  {
    question: "Combien coûte un site internet sur mesure en Bretagne ?",
    answer:
      "Le budget dépend du niveau de personnalisation, des intégrations et des objectifs business. Un cadrage initial permet de fixer un plan clair.",
  },
  {
    question: "Quel délai pour créer un site internet ?",
    answer:
      "Un site vitrine peut être livré en quelques semaines. Les plateformes plus avancées nécessitent un planning détaillé par lots.",
  },
  {
    question: "Le site sera-t-il optimisé pour le SEO local ?",
    answer:
      "Oui, la structure technique et éditoriale est préparée pour viser les requêtes locales en Bretagne et Centre Bretagne.",
  },
  {
    question: "Pouvez-vous reprendre un site existant ?",
    answer:
      "Oui, je peux effectuer une refonte partielle ou complète selon l'état de l'existant et vos objectifs de conversion.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Création de site internet sur mesure en Bretagne",
  description:
    "Création de site internet sur mesure en Bretagne et Centre Bretagne. Site rapide, bien structuré et optimisé pour la conversion.",
  path,
  keywords: [
    "site internet sur mesure bretagne",
    "création site internet centre bretagne",
    "développeur site web freelance",
    "refonte site internet",
    "site vitrine bretagne",
  ],
});

export default function CreationSiteInternetSurMesurePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <StructuredData
        entries={[
          personSchema,
          professionalServiceSchema,
          faqSchemaFromItems(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Création site internet sur mesure", path },
          ]),
        ]}
      />
      <Navbar />
      <SeoServicePage
        eyebrow="Site internet sur mesure"
        h1="Création de site internet sur mesure en Bretagne"
        intro="Je conçois des sites internet alignés sur vos objectifs commerciaux: acquisition, clarté de l'offre, preuve de confiance et conversion."
        primaryKeyword="site internet sur mesure bretagne"
        secondaryKeywords={[
          "création site internet centre bretagne",
          "développeur web freelance",
          "refonte de site",
          "site vitrine performant",
        ]}
        offers={[
          "Création de site vitrine sur mesure",
          "Refonte de site internet existant",
          "Structure de contenu orientée SEO et conversion",
          "Optimisations techniques de performance",
        ]}
        localValuePoints={[
          "Accompagnement proche des besoins terrain",
          "Décision rapide avec interlocuteur unique",
          "Capacité à adapter le projet à votre maturité digitale",
          "Suivi après mise en ligne pour consolider les résultats",
        ]}
        faqItems={faqItems}
        ctaLabel="Vous voulez un site internet qui génère des opportunités ?"
      />
      <Footer />
    </div>
  );
}
