import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toalltool.com"),
  title: { default: "ToAllTool | Online Tools, Organized", template: "%s | ToAllTool" },
  description: "Discover trusted online tools for converting, editing, and optimizing your files—all clearly organized in one place.",
  openGraph: { title: "ToAllTool | Online Tools, Organized", description: "Find trusted online tools for every task, all in one place.", type: "website", siteName: "ToAllTool" },
  twitter: { card: "summary", title: "ToAllTool | Online Tools, Organized", description: "Find trusted online tools for every task, all in one place." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#09070f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="page-bg flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
