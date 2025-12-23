import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

// Primary font - Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Secondary font - Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parthenon.ma"),
  title: "Parthenon Holding | Groupe d’Expertise Multidisciplinaire au Maroc",
  description:
    "Un guichet unique d’expertise regroupant 12 filiales spécialisées dans l’audiovisuel, l’événementiel, les loisirs, l’hébergement, la construction, la scénographie et la création d’expériences immersives. Excellence, innovation durable et solutions clé-en-main.",
  keywords: [
    "Parthenon Holding",
    "Parthenon Maroc",
    "Holding Maroc",
    "Groupe Parthenon",
    "Audiovisuel Maroc",
    "Événementiel Maroc",
    "Loisirs Maroc",
    "Construction Maroc",
    "Hébergement Maroc",
    "Scénographie",
    "Expériences immersives",
    "Groupe d’entreprises Maroc",
  ],

  // Open Graph (Facebook / LinkedIn)
  openGraph: {
    title: "Parthenon Holding | Groupe d’Expertise Multidisciplinaire",
    description:
      "Parthenon Holding regroupe 12 filiales spécialisées dans l’audiovisuel, l’événementiel, les loisirs, l’hébergement, la construction et la scénographie. Un écosystème innovant guidé par l’excellence.",
    url: "https://parthenon.ma",
    siteName: "Parthenon Holding",
    type: "website",
    locale: "fr_FR"
  },

  // Canonical
  alternates: {
    canonical: "https://parthenon.ma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${montserrat.variable} font-optima`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
