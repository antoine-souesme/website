import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
