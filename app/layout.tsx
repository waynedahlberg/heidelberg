import type { Metadata } from "next";
import { Alegreya, Alegreya_SC, Courier_Prime } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { SmoothScroll } from "@/components/SmoothScroll";
import { UiProviders } from "@/components/UiProviders";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

const alegreyaSc = Alegreya_SC({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-alegreya-sc",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier-prime",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heidelberg",
  description:
    "A typographic journal after Bringhurst — one typeface, one measure, one baseline.",
  // Favicon pack lives in public/ (RealFaviconGenerator set).
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    title: "Heidelberg",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${alegreya.variable} ${alegreyaSc.variable} ${courierPrime.variable}`}
      >
        <body>
          <UiProviders>
            <SmoothScroll>{children}</SmoothScroll>
          </UiProviders>
        </body>
      </html>
    </ViewTransitions>
  );
}
