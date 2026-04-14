import type { Metadata } from "next";
import About from "./components/About";
import Contact from "./components/Contact";
import CoverageArea from "./components/CoverageArea";
import CustomMethod from "./components/CustomMethod";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import StructuredData from "./components/StructuredData";
import TrustProofs from "./components/TrustProofs";
import {
  buildPageMetadata,
  faqSchemaFromItems,
  homeFaqItems,
  personSchema,
  professionalServiceSchema,
  seoKeywords,
} from "./lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Developpeur freelance Centre Bretagne - Site internet et logiciel sur mesure",
  description:
    "Developpeur freelance en Centre Bretagne pour la creation de site internet et le developpement de logiciel sur mesure.",
  path: "/",
  keywords: seoKeywords,
});

export default function Home() {
  const homeFaqSchema = faqSchemaFromItems(homeFaqItems);

  return (
    <div className="min-h-screen bg-slate-900">
      <StructuredData
        entries={[personSchema, professionalServiceSchema, homeFaqSchema]}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CoverageArea />
      <CustomMethod />
      <TrustProofs />
      <Skills />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
