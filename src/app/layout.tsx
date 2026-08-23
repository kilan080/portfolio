import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import NextTopLoader from "nextjs-toploader";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Olamilekan Kilani — Portfolio",
    template: "%s | Olamilekan Kilani",
  },
  description:
    "Portfolio of Olamilekan Kilani — Frontend Web Developer building high-performance, elegant interactive web experiences.",
  keywords: [
    "Olamilekan Kilani",
    "Frontend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Software Engineer",
  ],
  metadataBase: new URL("https://kilani-portfolio.vercel.app"),
  icons: {
    icon: "/devkilan-logo.svg",
    shortcut: "/devkilan-logo.svg",
  },
  openGraph: {
    title: "Olamilekan Kilani — Portfolio",
    description:
      "Frontend Web Developer focusing on high-performance minimalist web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between overflow-x-hidden">
        <NextTopLoader
          color="#34C77B"
          height={2}
          showSpinner={false}
          shadow="none"
        />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        {/* We might remove Footer or redesign it later, but keeping it for now */}
        <Footer />
        <ContactInfo />
      </body>
    </html>
  );
}
