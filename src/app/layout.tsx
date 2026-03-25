// app/layout.tsx
import type { Metadata } from "next";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollReveal from "./components/ScrollRevealInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aymaan Pathan | SaaS Builder & Hackathon Winner ₹1.34L",
  description:
    "Aymaan Pathan is a 22-year-old software developer from Vadodara building real-world SaaS products and production systems. Hackathon winner (₹1.34L), Top 10 across global competitions. Built CRM platforms, WhatsApp automation systems, AI agents, and scalable backend tools used in production.",
  keywords: [
    "Aymaan Pathan",
    "SaaS Developer India",
    "Hackathon Winner Developer",
    "Software Developer Vadodara",
    "MERN Stack Developer India",
    "AI Developer India",
    "Full Stack Developer Portfolio",
  ],
  metadataBase: new URL("https://aymaan.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aymaan Pathan | SaaS Builder & Hackathon Winner ₹1.34L",
    description:
      "Building production-grade systems, SaaS products, CRM platforms, WhatsApp automation, and AI-powered tools. Hackathon winner with top global finishes.",
    url: "https://aymaan.in",
    siteName: "Aymaan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aymaan Pathan | SaaS Builder & Hackathon Winner ₹1.34L",
    description:
      "22-year-old developer building real-world SaaS products, AI systems, and automation tools. Hackathon winner (₹1.34L).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
          <ScrollReveal />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
