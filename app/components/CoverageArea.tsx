import Link from "next/link";

const cities: { name: string; dept: string }[] = [
  { name: "Saint-Brieuc", dept: "22" },
  { name: "Quintin", dept: "22" },
  { name: "Pontivy", dept: "56" },
  { name: "Loudéac", dept: "22" },
  { name: "Carhaix", dept: "29" },
  { name: "Rostrenen", dept: "22" },
];

const CoverageArea = () => {
  return (
    <section id="zone" className="py-28 px-6 bg-sand-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Zone d&apos;intervention</p>
            <h2 className="font-display text-5xl md:text-6xl serif-h2 mb-6">
              Centre Bretagne, <span className="serif-em">avant tout</span>.
            </h2>
            <p className="text-ink-700 text-lg leading-relaxed max-w-md">
              J&apos;accompagne les entreprises en Centre Bretagne pour créer
              des sites internet et logiciels sur mesure, avec un suivi proche
              et une exécution rapide.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="paper rounded-2xl p-8">
              <p className="eyebrow text-sand-500 mb-4">
                Villes principales couvertes
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 font-display text-2xl mb-8">
                {cities.map((city) => (
                  <li
                    key={city.name}
                    className="border-b border-dotted border-ink-900/20 py-3 flex items-center justify-between"
                  >
                    {city.name}
                    <span className="text-sand-500 text-sm font-sans">
                      {city.dept}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-ink-900/10 pt-6">
                <p className="eyebrow text-sand-500 mb-3">
                  Bretagne et missions à distance
                </p>
                <p className="text-ink-700 leading-relaxed mb-4">
                  Je peux aussi intervenir partout en Bretagne pour vos besoins
                  en création de site internet, logiciel métier et refonte
                  technique.
                </p>
                <Link
                  href="/developpeur-freelance-bretagne"
                  className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-ink-900 border-b border-ink-900/30 pb-1"
                >
                  En savoir plus sur mon accompagnement freelance
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
