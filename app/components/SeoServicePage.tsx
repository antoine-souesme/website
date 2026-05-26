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
    <main className="bg-sand-100 text-ink-900">
      <section className="pt-40 pb-20 px-6 bg-sand-100">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl serif-h2 mb-8 max-w-4xl">
            {h1}
          </h1>
          <p className="text-lg md:text-xl text-ink-700 leading-relaxed max-w-3xl">
            {intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink-900/15 text-sm text-ink-700">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-400" />
              Expertise : {primaryKeyword}
            </span>
            {secondaryKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 rounded-full border border-ink-900/10 text-sm text-ink-500"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-sand-50 border-y border-ink-900/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-ink-900/10 border border-ink-900/10 rounded-2xl overflow-hidden">
          <article className="bg-sand-50 p-10">
            <p className="eyebrow text-sand-500 mb-4">Ce que je réalise</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Des livrables <span className="serif-em">concrets</span>.
            </h2>
            <ul className="space-y-3 text-ink-700">
              {offers.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sand-400 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-sand-50 p-10">
            <p className="eyebrow text-sand-500 mb-4">
              Pourquoi en Centre Bretagne
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Proche et <span className="serif-em">réactif</span>.
            </h2>
            <ul className="space-y-3 text-ink-700">
              {localValuePoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sand-400 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="eyebrow mb-4">Questions fréquentes</p>
            <h2 className="font-display text-4xl md:text-5xl serif-h2">
              Vos <span className="serif-em">questions</span>, mes réponses.
            </h2>
          </div>

          <div className="border-t border-ink-900/10">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="border-b border-ink-900/10 group py-6"
              >
                <summary className="cursor-pointer flex items-start justify-between gap-6">
                  <span className="font-display text-2xl md:text-3xl leading-snug">
                    {item.question}
                  </span>
                  <span className="faq-plus text-sand-500 text-3xl leading-none mt-1 font-light">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink-700 leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-[1fr_auto] items-center gap-8 paper rounded-2xl p-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-3">
                {ctaLabel}
              </h2>
              <p className="text-ink-700 leading-relaxed max-w-2xl">
                Je peux vous accompagner en Centre Bretagne ou à distance pour
                livrer un résultat utile rapidement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 self-start md:self-auto">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-ink-900 text-sand-50 rounded-full font-medium hover:bg-ocean-700 transition"
              >
                Me contacter
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
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-4 rounded-full border border-ink-900/20 text-ink-900 hover:bg-ink-900/5 transition"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-ink-900/10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            <Link
              href="/developpeur-freelance-bretagne"
              className="link-arrow inline-flex items-center gap-1 hover:text-ink-900 transition-colors"
            >
              Développeur freelance Bretagne
            </Link>
            <Link
              href="/creation-site-internet-sur-mesure-bretagne"
              className="link-arrow inline-flex items-center gap-1 hover:text-ink-900 transition-colors"
            >
              Site internet sur mesure
            </Link>
            <Link
              href="/developpement-logiciel-sur-mesure-bretagne"
              className="link-arrow inline-flex items-center gap-1 hover:text-ink-900 transition-colors"
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
