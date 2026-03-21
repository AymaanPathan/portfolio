// app/layout.tsx
import type { Metadata } from "next";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollReveal from "./components/ScrollRevealInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aymaan Pathan | Software Developer | MERN & AI Systems",
  description:
    "Aymaan Pathan is a software developer from Vadodara building real-world systems like CRM, WhatsApp automation, and AI calling agents using MERN stack and modern technologies.",
  keywords: [
    "Aymaan Pathan",
    "Software Developer Vadodara",
    "MERN Stack Developer India",
    "Full Stack Developer Portfolio",
    "AI Developer India",
  ],
  metadataBase: new URL("https://aymaan.in"),
  openGraph: {
    title: "Aymaan Pathan | Software Developer",
    description:
      "Portfolio of Aymaan Pathan — building CRM systems, AI chatbots, and automation tools.",
    url: "https://aymaan.in",
    siteName: "Aymaan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
          <ScrollReveal />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
