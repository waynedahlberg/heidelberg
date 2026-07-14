import type { Metadata } from "next";
import { Alegreya, Alegreya_SC, Courier_Prime } from "next/font/google";
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

export const metadata: Metadata = { title: "Aldine" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} ${alegreyaSc.variable} ${courierPrime.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
