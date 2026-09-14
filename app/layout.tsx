import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s - Portfolio",
  },
  description: "Personal portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <Navbar />
          <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 md:py-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
