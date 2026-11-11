import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = "Aymaan Pathan — Software Engineer";
const description =
  "Aymaan Pathan is a software engineer at AgileMorph building AI-native products and production systems. 2× hackathon winner: FalkorDB Graph Hacks (Track 02) and Backend Reloaded (₹1.34L, solo).";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Aymaan Pathan",
    "Software Engineer",
    "Full Stack Engineer India",
    "Hackathon Winner",
    "FalkorDB Hackathon",
    "AI Engineer India",
    "Software Developer Vadodara",
  ],
  metadataBase: new URL("https://aymaan.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://aymaan.in",
    siteName: "Aymaan Pathan",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

// Applies the saved theme before first paint so there is no flash.
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
