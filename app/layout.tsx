import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { buildPageMetadata, seoKeywords, siteUrl } from "./lib/seo";

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
        <html lang="fr">
            <body>{children}</body>

            {/* https://vercel.com/docs/analytics/package */}
            <Analytics />
        </html>
    );
}
