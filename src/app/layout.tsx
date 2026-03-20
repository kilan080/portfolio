import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader
          color="#3b82f6"
          height={3}
          showSpinner={false}
          shadow="0 0 10px #3b82f6"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
