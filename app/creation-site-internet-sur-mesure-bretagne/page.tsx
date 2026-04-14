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
    question: "Combien coute un site internet sur mesure en Bretagne ?",
    answer:
      "Le budget depend du niveau de personnalisation, des integrations et des objectifs business. Un cadrage initial permet de fixer un plan clair.",
  },
  {
    question: "Quel delai pour creer un site internet ?",
    answer:
      "Un site vitrine peut etre livre en quelques semaines. Les plateformes plus avancees necessitent un planning detaille par lots.",
  },
  {
    question: "Le site sera-t-il optimise pour le SEO local ?",
    answer:
      "Oui, la structure technique et editoriale est preparee pour viser les requetes locales en Bretagne et Centre Bretagne.",
  },
  {
    question: "Pouvez-vous reprendre un site existant ?",
    answer:
      "Oui, je peux effectuer une refonte partielle ou complete selon l'etat de l'existant et vos objectifs de conversion.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Creation de site internet sur mesure en Bretagne",
  description:
    "Creation de site internet sur mesure en Bretagne et Centre Bretagne. Site rapide, bien structure et optimise pour la conversion.",
  path,
  keywords: [
    "site internet sur mesure bretagne",
    "creation site internet centre bretagne",
    "developpeur site web freelance",
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
            { name: "Creation site internet sur mesure", path },
          ]),
        ]}
      />
      <Navbar />
      <SeoServicePage
        eyebrow="Site internet sur mesure"
        h1="Creation de site internet sur mesure en Bretagne"
        intro="Je concois des sites internet alignes sur vos objectifs commerciaux: acquisition, clarte de l'offre, preuve de confiance et conversion."
        primaryKeyword="site internet sur mesure bretagne"
        secondaryKeywords={[
          "creation site internet centre bretagne",
          "developpeur web freelance",
          "refonte de site",
          "site vitrine performant",
        ]}
        offers={[
          "Creation de site vitrine sur mesure",
          "Refonte de site internet existant",
          "Structure de contenu orientee SEO et conversion",
          "Optimisations techniques de performance",
        ]}
        localValuePoints={[
          "Accompagnement proche des besoins terrain",
          "Decision rapide avec interlocuteur unique",
          "Capacite a adapter le projet a votre maturite digitale",
          "Suivi apres mise en ligne pour consolider les resultats",
        ]}
        faqItems={faqItems}
        ctaLabel="Vous voulez un site internet qui genere des opportunites ?"
      />
      <Footer />
    </div>
  );
}
