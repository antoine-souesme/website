import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Développeur freelance Bretagne", href: "/developpeur-freelance-bretagne" },
    {
      label: "Création de site internet sur mesure",
      href: "/creation-site-internet-sur-mesure-bretagne",
    },
    {
      label: "Développement logiciel sur mesure",
      href: "/developpement-logiciel-sur-mesure-bretagne",
    },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Antoine Souesme
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Développeur freelance en Centre Bretagne pour sites internet et
              logiciels sur mesure.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Profil</h4>
            <a
              href="https://www.linkedin.com/in/antoine-souesme-07329574/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Antoine Souesme. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-sm">Développé en Next.js et TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
