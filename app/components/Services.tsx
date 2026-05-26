import Link from "next/link";

const services = [
  {
    number: "01",
    eyebrow: "Web",
    title: "Création de site internet sur mesure",
    description:
      "Sites vitrines et plateformes web performantes, conçues pour convertir et évoluer.",
    features: [
      "Conception UX",
      "Développement front-end et back-end",
      "SEO technique",
      "Mise en production",
    ],
    href: "/creation-site-internet-sur-mesure-bretagne",
  },
  {
    number: "02",
    eyebrow: "Logiciel",
    title: "Développement logiciel sur mesure",
    description:
      "Applications métier adaptées à vos processus pour gagner en productivité et fiabilité.",
    features: [
      "Analyse besoin métier",
      "Architecture évolutive",
      "API et base de données",
      "Maintenance continue",
    ],
    href: "/developpement-logiciel-sur-mesure-bretagne",
  },
  {
    number: "03",
    eyebrow: "Freelance",
    title: "Accompagnement freelance en Bretagne",
    description:
      "Renfort technique pour accélérer votre roadmap, de la conception à la livraison.",
    features: [
      "Intervention en Centre Bretagne",
      "Collaboration avec vos équipes",
      "Code review et qualité",
      "Pilotage pragmatique",
    ],
    href: "/developpeur-freelance-bretagne",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-28 px-6 bg-sand-50 border-y border-ink-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Services</p>
            <h2 className="font-display text-5xl md:text-6xl serif-h2">
              Des offres claires pour vos besoins{" "}
              <span className="serif-em">web et logiciel</span> sur mesure en
              Bretagne.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink-900/10 border border-ink-900/10 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-sand-50 p-8 flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-3xl text-sand-500">
                  {service.number}
                </span>
                <span className="eyebrow">{service.eyebrow}</span>
              </div>
              <h3 className="font-display text-3xl mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-ink-700 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-ink-700 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-sand-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-ink-900 border-b border-ink-900/30 pb-1 self-start"
              >
                Voir la page détaillée
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
            </article>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-[1fr_auto] items-center gap-8 paper rounded-2xl p-10">
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-3">
              Besoin d&apos;un développeur freelance en Centre Bretagne ?
            </h3>
            <p className="text-ink-700 leading-relaxed max-w-2xl">
              Discutons de votre contexte et construisons une solution sur
              mesure, utile pour votre activité et soutenable dans la durée.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-4 bg-ink-900 text-sand-50 rounded-full font-medium hover:bg-ocean-700 transition self-start md:self-auto"
          >
            Demander un échange
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
