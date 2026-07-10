import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
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

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#14B8A6" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="page-bg flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
