import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Override: Genesys — Teasers & Pitch",
  description: "Mini-teasers, pitch narratif, et contact pro pour Override: Genesis by VeenaDev.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif", background: "#0b0f14", color: "#e6e9ef" }}>
        {children}
      </body>
    </html>
  );
}

