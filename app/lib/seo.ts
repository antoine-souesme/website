import type { Metadata } from "next";

const FALLBACK_SITE_URL = "http://localhost:3000";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? FALLBACK_SITE_URL;

const normalizeSiteUrl = (value: string) => value.replace(/\/+$/, "") || FALLBACK_SITE_URL;

export const siteUrl = normalizeSiteUrl(rawSiteUrl);
export const siteName = "Antoine Souesme";

export const seoKeywords = [
  "developpeur freelance",
  "developpeur bretagne",
  "developpeur centre bretagne",
  "site internet sur mesure",
  "creation site internet bretagne",
  "developpement logiciel sur mesure",
  "freelance bretagne",
  "freelance centre bretagne",
  "logiciel metier",
  "application web sur mesure",
];

export const localCities = ["Pontivy", "Loudeac", "Carhaix", "Rostrenen"];

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).toString();

export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords,
}: PageSeoConfig): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    title,
    description,
    url: absoluteUrl(path),
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
});

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antoine Souesme",
  url: absoluteUrl("/"),
  jobTitle: "Developpeur freelance",
  worksFor: {
    "@type": "Organization",
    name: "Antoine Souesme",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  sameAs: ["https://www.linkedin.com/in/antoine-souesme-07329574/"],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Antoine Souesme",
  url: absoluteUrl("/"),
  areaServed: ["Centre Bretagne", "Bretagne", ...localCities],
  serviceType: [
    "Developpement de site internet sur mesure",
    "Developpement de logiciel sur mesure",
    "Developpement web freelance",
  ],
  description:
    "Developpeur freelance en Centre Bretagne. Creation de sites internet et logiciels sur mesure pour entreprises.",
  founder: {
    "@type": "Person",
    name: "Antoine Souesme",
  },
  knowsAbout: [
    "Developpement web",
    "Site internet",
    "Logiciel metier",
    "React",
    "TypeScript",
    "Node.js",
  ],
};

export const homeFaqItems = [
  {
    question: "Pourquoi choisir un developpeur freelance en Centre Bretagne ?",
    answer:
      "Vous gagnez en proximite, en reactivite et en accompagnement sur mesure pour votre projet digital.",
  },
  {
    question: "Combien de temps pour creer un site internet sur mesure ?",
    answer:
      "Selon la complexite, un site vitrine peut etre livre en quelques semaines, avec un cadrage clair des delais des le depart.",
  },
  {
    question: "Pouvez-vous developper un logiciel metier sur mesure ?",
    answer:
      "Oui, je concois des applications adaptees a vos processus internes, avec une architecture evolutive.",
  },
  {
    question: "Intervenez-vous uniquement en Centre Bretagne ?",
    answer:
      "Le coeur de l'activite est en Centre Bretagne, avec interventions possibles partout en Bretagne et a distance.",
  },
  {
    question: "Travaillez-vous avec des TPE, PME et associations ?",
    answer:
      "Oui, j'accompagne des structures de tailles variees pour des besoins web et logiciels sur mesure.",
  },
  {
    question: "Comment se passe un projet sur mesure ?",
    answer:
      "Le projet suit une methode simple: brief, conception, developpement, livraison et accompagnement.",
  },
  {
    question: "Quel delai de reponse pour une demande ?",
    answer:
      "Je m'engage a un premier retour sous 24h ouvrees pour cadrer votre besoin et proposer la suite.",
  },
];

export const faqSchemaFromItems = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
