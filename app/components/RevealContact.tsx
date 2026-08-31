"use client";

import { useState } from "react";

const decode = (value: string) =>
  typeof window === "undefined"
    ? ""
    : window.atob(value).split("").reverse().join("");

type RevealContactProps = {
  label: string;
  scheme: "mailto" | "tel";
  /** Valeur affichée, encodée (base64 de la chaîne inversée). */
  encodedDisplay: string;
  /** Valeur utilisée dans le lien, encodée de la même façon. */
  encodedHref: string;
  icon: React.ReactNode;
};

const RevealContact = ({
  label,
  scheme,
  encodedDisplay,
  encodedHref,
  icon,
}: RevealContactProps) => {
  const [revealed, setRevealed] = useState<{
    display: string;
    href: string;
  } | null>(null);

  return (
    <div className="flex items-center justify-between gap-4 p-5 rounded-xl border border-sand-100/15">
      <div className="min-w-0">
        <p className="eyebrow text-sand-400 mb-1">{label}</p>
        {revealed ? (
          <a
            href={`${scheme}:${revealed.href}`}
            className="font-display text-2xl text-sand-100 hover:text-sand-300 transition break-all"
          >
            {revealed.display}
          </a>
        ) : (
          <button
            type="button"
            onClick={() =>
              setRevealed({
                display: decode(encodedDisplay),
                href: decode(encodedHref),
              })
            }
            className="font-display text-2xl text-sand-100/60 hover:text-sand-100 transition underline underline-offset-4 decoration-sand-100/30"
          >
            Cliquez pour afficher
          </button>
        )}
      </div>
      <span className="shrink-0">{icon}</span>
    </div>
  );
};

export default RevealContact;
