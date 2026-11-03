import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./palette-0.css";
import "./site.css";

// Sabon is licensed to the school: the woff2 files live in src/fonts and are not committed (see README).
const sabon = localFont({
  variable: "--font-sabon",
  display: "swap",
  src: [
    { path: "../fonts/Sabon-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Sabon-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/Sabon-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Sabon-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
});
const code = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPCJH Theme Studies",
  description:
    "Two editorial directions for the next issue of the Las Positas College Journal of Honors: In Between and Fragments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sabon.variable} ${code.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
