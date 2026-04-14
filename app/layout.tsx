import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antoine Souesme",
  description: "Développeur de site web et application mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
