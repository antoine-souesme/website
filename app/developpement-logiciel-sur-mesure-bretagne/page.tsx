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

const path = "/developpement-logiciel-sur-mesure-bretagne";

const faqItems = [
  {
    question: "Qu'est-ce qu'un logiciel sur mesure ?",
    answer:
      "Un logiciel sur mesure est une application construite selon vos processus metier, vos contraintes et vos objectifs de performance.",
  },
  {
    question: "Pouvez-vous remplacer un fichier Excel ou un outil limite ?",
    answer:
      "Oui, je peux transformer un fonctionnement manuel en solution web plus fiable, partagee et evolutive.",
  },
  {
    question: "Le logiciel peut-il evoluer dans le temps ?",
    answer:
      "Oui, l'architecture est prevue pour ajouter des modules et accompagner la croissance de votre activite.",
  },
  {
    question: "Travaillez-vous avec les PME en Bretagne ?",
    answer:
      "Oui, j'accompagne des entreprises en Bretagne et Centre Bretagne sur des besoins logiciels metier concretement utiles.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Developpement de logiciel sur mesure en Bretagne",
  description:
    "Developpement de logiciel sur mesure en Bretagne et Centre Bretagne. Applications metier robustes, evolutives et adaptees a vos processus.",
  path,
  keywords: [
    "logiciel sur mesure bretagne",
    "developpement logiciel centre bretagne",
    "application metier sur mesure",
    "developpeur logiciel freelance",
    "outil metier web",
  ],
});

export default function DeveloppementLogicielSurMesurePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <StructuredData
        entries={[
          personSchema,
          professionalServiceSchema,
          faqSchemaFromItems(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Developpement logiciel sur mesure", path },
          ]),
        ]}
      />
      <Navbar />
      <SeoServicePage
        eyebrow="Logiciel metier"
        h1="Developpement de logiciel sur mesure en Bretagne"
        intro="Je developpe des logiciels metier qui simplifient vos operations quotidiennes et rendent vos donnees plus exploitables pour piloter l'activite."
        primaryKeyword="logiciel sur mesure bretagne"
        secondaryKeywords={[
          "developpement logiciel centre bretagne",
          "application metier",
          "outil sur mesure",
          "developpeur logiciel freelance",
        ]}
        offers={[
          "Conception d'applications metier web",
          "Automatisation de process repetitifs",
          "Centralisation et visualisation de donnees",
          "Maintenance et evolutions progressives",
        ]}
        localValuePoints={[
          "Approche terrain adaptee aux besoins des PME",
          "Communication directe pour arbitrer rapidement",
          "Livraison incrementale pour obtenir de la valeur vite",
          "Support fiable apres la mise en service",
        ]}
        faqItems={faqItems}
        ctaLabel="Besoin d'un logiciel metier adapte a votre activite ?"
      />
      <Footer />
    </div>
  );
}
