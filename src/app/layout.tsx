import type { Metadata } from "next";
import { Lora, Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "The Capsule Muse – Chic, Minimalist, Inspiring.",
  description: "Chic, Minimalist, Inspiring. Outfit inspiration, capsule wardrobes, and styling tips by Valerie.",
  icons: {
    icon: [
      { url: "/images/logo-icon.png", sizes: "32x32" },
      { url: "/images/logo-icon.png", sizes: "192x192" }
    ],
    apple: "/images/logo-icon.png",
  },
  other: {
    "verify-yeahpromos": "19d94a03f390",
    "partnerboostverifycode": "32dc01246faccb7f5b3cad5016dd5033",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-text">
        {children}
      </body>
    </html>
  );
}
