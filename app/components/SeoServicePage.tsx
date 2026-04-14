import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

type SeoServicePageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  offers: string[];
  localValuePoints: string[];
  faqItems: FaqItem[];
  ctaLabel: string;
};

const SeoServicePage = ({
  eyebrow,
  h1,
  intro,
  primaryKeyword,
  secondaryKeywords,
  offers,
  localValuePoints,
  faqItems,
  ctaLabel,
}: SeoServicePageProps) => {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-200 mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{h1}</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-4xl">{intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full border border-blue-400/40 text-blue-200 text-sm">
              Expertise principale: {primaryKeyword}
            </span>
            {secondaryKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 rounded-full border border-slate-600 text-slate-300 text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <article className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Ce que je peux realiser</h2>
            <ul className="space-y-3 text-slate-300">
              {offers.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi en Centre Bretagne</h2>
            <ul className="space-y-3 text-slate-300">
              {localValuePoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Questions frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 group"
              >
                <summary className="cursor-pointer text-white font-semibold list-none pr-6 relative">
                  {item.question}
                  <span className="absolute right-0 top-0 text-slate-400 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-slate-800/70 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-3">{ctaLabel}</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Je peux vous accompagner en Centre Bretagne ou a distance pour livrer
              un resultat utile rapidement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Me contacter
              </Link>
              <Link
                href="/"
                className="px-6 py-3 rounded-full border border-slate-500 text-slate-200 hover:border-slate-300 transition-colors"
              >
                Retour a la page d&apos;accueil
              </Link>
            </div>
          </div>

          <div className="mt-8 text-sm text-slate-400 flex flex-wrap gap-4">
            <Link href="/developpeur-freelance-bretagne" className="hover:text-slate-200">
              Developpeur freelance Bretagne
            </Link>
            <Link
              href="/creation-site-internet-sur-mesure-bretagne"
              className="hover:text-slate-200"
            >
              Site internet sur mesure
            </Link>
            <Link
              href="/developpement-logiciel-sur-mesure-bretagne"
              className="hover:text-slate-200"
            >
              Logiciel sur mesure
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeoServicePage;
