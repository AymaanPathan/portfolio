// app/layout.tsx
import type { Metadata } from "next";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollReveal from "./components/ScrollRevealInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aymaan — Full Stack Developer",
  description: "Portfolio",
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
