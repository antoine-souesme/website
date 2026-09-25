import Link from "next/link";

const links = [
  { label: "Accueil", href: "/" },
  {
    label: "Développeur freelance Bretagne",
    href: "/developpeur-freelance-bretagne",
  },
  {
    label: "Création de site internet sur mesure",
    href: "/creation-site-internet-sur-mesure-bretagne",
  },
  {
    label: "Développement logiciel sur mesure",
    href: "/developpement-logiciel-sur-mesure-bretagne",
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-900 text-sand-100/80 border-t border-sand-100/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-sand-400 grid place-items-center text-ink-900 font-display text-lg">
                A
              </span>
              <span className="font-display text-xl text-sand-100">
                Antoine Souesme
              </span>
            </div>
            <p className="leading-relaxed text-sm max-w-xs">
              Développeur freelance en Centre Bretagne pour sites internet et
              logiciels sur mesure.
            </p>
          </div>
          <div>
            <p className="eyebrow text-sand-400 mb-4">Navigation</p>
            <ul className="space-y-2 text-sm">
              {links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-sand-100 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-sand-400 mb-4">Profil</p>
            <a
              href="https://www.linkedin.com/in/antoine-souesme-07329574/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-sand-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-sand-100/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-sand-100/50">
          <p>© {currentYear} Antoine Souesme. Tous droits réservés.</p>
          <p>Développé en Next.js et TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
