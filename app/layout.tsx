import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { buildPageMetadata, seoKeywords, siteUrl } from "./lib/seo";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
    display: "swap",
});

const defaultMetadata = buildPageMetadata({
    title:
        "Développeur freelance en Centre Bretagne | Site internet et logiciel sur mesure",
    description:
        "Développeur freelance en Centre Bretagne. Création de site internet et développement logiciel sur mesure pour entreprises en Bretagne.",
    path: "/",
    keywords: seoKeywords,
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default:
            "Développeur freelance en Centre Bretagne | Site internet et logiciel sur mesure",
        template: "%s | Antoine Souesme",
    },
    description: defaultMetadata.description,
    keywords: seoKeywords,
    alternates: defaultMetadata.alternates,
    openGraph: defaultMetadata.openGraph,
    twitter: defaultMetadata.twitter,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    authors: [{ name: "Antoine Souesme" }],
    creator: "Antoine Souesme",
    publisher: "Antoine Souesme",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${geist.variable} ${instrumentSerif.variable}`}>
            <head>
                <meta name="apple-mobile-web-app-title" content="Antoine Souesme" />
            </head>

            <body className="bg-sand-100 text-ink-900 antialiased">{children}</body>

            {/* https://vercel.com/docs/analytics/package */}
            <Analytics />
        </html>
    );
}
