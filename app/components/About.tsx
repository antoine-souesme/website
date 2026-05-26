import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-sand-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">À propos</p>
            <h2 className="font-display text-5xl md:text-6xl serif-h2 mb-8">
              Dix ans à construire des choses{" "}
              <span className="serif-em">utiles</span>.
            </h2>
            <div className="relative aspect-square rounded-md overflow-hidden bg-sand-200">
              <Image
                src="/images/pp_square.png"
                alt="Portrait d'Antoine Souesme"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8 lg:pt-16">
            <div className="space-y-10 text-lg leading-relaxed text-ink-700">
              <div>
                <p className="eyebrow text-sand-500 mb-2">10 ans d&apos;expérience</p>
                <p>
                  Une décennie de développement web et mobile avec React, React
                  Native, Node.js et TypeScript. De la startup à l&apos;entreprise,
                  j&apos;ai accompagné des projets de toutes envergures.
                </p>
              </div>
              <div>
                <p className="eyebrow text-sand-500 mb-2">Passion UX</p>
                <p>
                  Je ne me contente pas d&apos;écrire du code. Je crée des
                  expériences utilisateur intuitives et engageantes.
                  L&apos;interface est le pont entre votre vision et vos
                  utilisateurs.
                </p>
              </div>
              <div>
                <p className="eyebrow text-sand-500 mb-2">Bilingue FR / EN</p>
                <p>
                  Je travaille aussi bien sur des projets français
                  qu&apos;internationaux. Communication fluide et documentation
                  claire dans les deux langues.
                </p>
              </div>
            </div>

            <div className="mt-12 paper rounded-xl p-8">
              <h3 className="font-display text-3xl mb-6">Ma philosophie</h3>
              <ul className="space-y-4 text-ink-700">
                <li className="flex gap-4">
                  <span className="font-display text-sand-500 text-xl leading-none mt-1">
                    i.
                  </span>
                  <p>
                    <strong className="text-ink-900 font-medium">
                      Vision complète
                    </strong>
                    . De la conception à la livraison, je prends en charge tous
                    les aspects de votre projet.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-sand-500 text-xl leading-none mt-1">
                    ii.
                  </span>
                  <p>
                    <strong className="text-ink-900 font-medium">
                      Full-stack
                    </strong>
                    . Front-end, back-end, mobile, desktop : je maîtrise toute
                    la stack pour une cohérence optimale.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-sand-500 text-xl leading-none mt-1">
                    iii.
                  </span>
                  <p>
                    <strong className="text-ink-900 font-medium">
                      Qualité du code
                    </strong>
                    . Code propre, maintenable et évolutif. Parce qu&apos;un
                    projet réussi se pense sur le long terme.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-sand-500 text-xl leading-none mt-1">
                    iv.
                  </span>
                  <p>
                    <strong className="text-ink-900 font-medium">
                      Collaboration
                    </strong>
                    . Renforcement d&apos;équipe, mentorat, ou prise en charge
                    complète : je m&apos;adapte à vos besoins.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between paper rounded-xl px-6 py-5">
              <div>
                <p className="eyebrow mb-1">Localisation</p>
                <p className="font-medium text-ink-900">Bretagne, France</p>
              </div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b48944"
                strokeWidth="1.5"
              >
                <path d="M12 22s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
