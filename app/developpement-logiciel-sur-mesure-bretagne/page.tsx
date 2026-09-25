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
      "Un logiciel sur mesure est une application construite selon vos processus métier, vos contraintes et vos objectifs de performance.",
  },
  {
    question: "Pouvez-vous remplacer un fichier Excel ou un outil limité ?",
    answer:
      "Oui, je peux transformer un fonctionnement manuel en solution web plus fiable, partagée et évolutive.",
  },
  {
    question: "Le logiciel peut-il évoluer dans le temps ?",
    answer:
      "Oui, l'architecture est prévue pour ajouter des modules et accompagner la croissance de votre activité.",
  },
  {
    question: "Travaillez-vous avec les PME en Bretagne ?",
    answer:
      "Oui, j'accompagne des entreprises en Bretagne et Centre Bretagne sur des besoins logiciels métier concrètement utiles.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Développement sur mesure en Bretagne : logiciel métier",
  description:
    "Développement sur mesure en Bretagne et Centre Bretagne : logiciels et applications métier robustes, évolutives et adaptées à vos processus.",
  path,
  keywords: [
    "développement sur mesure bretagne",
    "logiciel sur mesure bretagne",
    "développement logiciel centre bretagne",
    "application métier sur mesure",
    "développeur logiciel freelance",
    "outil métier web",
  ],
});

export default function DeveloppementLogicielSurMesurePage() {
  return (
    <>
      <StructuredData
        entries={[
          personSchema,
          professionalServiceSchema,
          faqSchemaFromItems(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Développement logiciel sur mesure", path },
          ]),
        ]}
      />
      <Navbar />
      <SeoServicePage
        eyebrow="Logiciel métier"
        h1="Développement sur mesure en Bretagne : votre logiciel métier"
        intro="Je développe des logiciels métier qui simplifient vos opérations quotidiennes et rendent vos données plus exploitables pour piloter l'activité."
        primaryKeyword="logiciel sur mesure bretagne"
        secondaryKeywords={[
          "développement logiciel centre bretagne",
          "application métier",
          "outil sur mesure",
          "développeur logiciel freelance",
        ]}
        offers={[
          "Conception d'applications métier web",
          "Automatisation de process répétitifs",
          "Centralisation et visualisation de données",
          "Maintenance et évolutions progressives",
        ]}
        localValuePoints={[
          "Approche terrain adaptée aux besoins des PME",
          "Communication directe pour arbitrer rapidement",
          "Livraison incrémentale pour obtenir de la valeur vite",
          "Support fiable après la mise en service",
        ]}
        caseStudy={{
          eyebrow: "Projet réalisé",
          title: "Cool Cars : des fonctionnalités pour une plateforme de gestion de flotte",
          context:
            "Cool Cars gère des flottes de véhicules proposés à la location. Au sein de l'équipe de développement, j'ai conçu et développé plusieurs fonctionnalités de la plateforme.",
          deliverables: [
            "Des règles de changement de prix automatique, avec des exclusions par groupe de véhicules et par dates",
            "Des alertes sur les locations, par exemple quand des frais de carburant n'ont pas été facturés",
            "L'envoi de messages aux clients via la plateforme de location Getaround",
            "Un planning des véhicules pour les gestionnaires, repris en version réduite dans l'application des préparateurs sur le terrain",
            "Des filtres par groupe de véhicules et le suivi des places réelles dans les parkings",
          ],
          stack: ["Vue.js", "TypeScript", "Firebase", "Fastify"],
        }}
        faqItems={faqItems}
        ctaLabel="Besoin d'un logiciel métier adapté à votre activité ?"
      />
      <Footer />
    </>
  );
}
