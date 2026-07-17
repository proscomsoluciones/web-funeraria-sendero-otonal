import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Funeraria Sendero Otoñal - Acompañamiento Digno y Respetuoso",
  description: "En momentos donde las palabras no bastan, asumimos con absoluta delicadeza la gestión de todos los detalles y trámites legales. Te brindamos paz, transparencia y el amparo que tu familia merece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF8F5] text-[#232511] font-sans flex flex-col min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
