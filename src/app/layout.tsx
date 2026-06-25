import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { gym } from "@/lib/gym-data";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk-var",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://superseriefitness.com.br";

export const metadata: Metadata = {
  metadataBase: new URL("https://superseriefitness.com.br"),
  title: {
    default: "Academia Super Série Fitness — São Caetano, Salvador",
    template: "%s | Super Série Fitness",
  },
  description:
    "Conheça a Academia Super Série Fitness em São Caetano, Salvador. Estrutura, equipamentos, profissionais e ambiente climatizado para sua rotina de treino.",
  keywords: [
    "Academia Super Série Fitness",
    "academia em São Caetano",
    "academia em Salvador",
    "musculação em São Caetano",
    "academia climatizada em Salvador",
    "academia Estrada de Campinas",
    "treino em São Caetano",
  ],
  authors: [{ name: "Academia Super Série Fitness" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Academia Super Série Fitness — São Caetano, Salvador",
    description:
      "Estrutura, equipamentos e ambiente climatizado para treinar com foco em São Caetano, Salvador.",
    siteName: "Super Série Fitness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Super Série Fitness — São Caetano, Salvador",
    description:
      "Estrutura, equipamentos e ambiente climatizado para treinar com foco em São Caetano, Salvador.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050706",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: gym.name,
  description:
    "Academia em São Caetano, Salvador, com estrutura, equipamentos, profissionais e ambiente climatizado.",
  telephone: "+557133295466",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Estr. de Campinas, 490",
    addressLocality: "São Caetano",
    addressRegion: "BA",
    postalCode: "40391-161",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: gym.rating,
    reviewCount: gym.reviewsCount,
  },
  openingHours: "Mo-Su 06:00-22:00",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebas.variable} ${grotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SmoothScroll>
          <Header />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <MobileCTA />
      </body>
    </html>
  );
}
