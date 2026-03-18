import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Olamilekan Kilani | Frontend Developer",
    template: "%s | Olamilekan Kilani",
  },
  description:
    "Frontend developer building responsive, user-friendly applications with modern technologies.",
  keywords: [
    "frontend developer",
    "fullstack developer",
    "Next.js",
    "React",
    "Nigeria",
  ],
  metadataBase: new URL("https://yourportfolio.vercel.app"),
  openGraph: {
    title: "Olamilekan Kilani | Frontend Developer",
    description:
      "Frontend developer building responsive, user-friendly applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
