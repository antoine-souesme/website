import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Creation de site internet sur mesure",
      description:
        "Sites vitrines et plateformes web performantes, concues pour convertir et evoluer.",
      features: [
        "Conception UX",
        "Developpement front-end et back-end",
        "SEO technique",
        "Mise en production",
      ],
      href: "/creation-site-internet-sur-mesure-bretagne",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Developpement logiciel sur mesure",
      description:
        "Applications metier adaptees a vos processus pour gagner en productivite et fiabilite.",
      features: [
        "Analyse besoin metier",
        "Architecture evolutive",
        "API et base de donnees",
        "Maintenance continue",
      ],
      href: "/developpement-logiciel-sur-mesure-bretagne",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Accompagnement freelance en Bretagne",
      description:
        "Renfort technique pour accelerer votre roadmap, de la conception a la livraison.",
      features: [
        "Intervention en Centre Bretagne",
        "Collaboration avec vos equipes",
        "Code review et qualite",
        "Pilotage pragmatique",
      ],
      href: "/developpeur-freelance-bretagne",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center text-white">Services</h2>
        <p className="text-xl text-slate-400 text-center mb-16">
          Des offres claires pour vos besoins web et logiciel sur mesure en Bretagne
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <h3
                className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
              >
                {service.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors"
              >
                Voir la page detaillee
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-5">
            Besoin d&apos;un developpeur freelance en Centre Bretagne ?
          </h3>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Discutons de votre contexte et construisons une solution sur mesure,
            utile pour votre activite et soutenable dans la duree.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Demander un echange
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
