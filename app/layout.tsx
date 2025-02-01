import type { Metadata } from "next";
import { DM_Sans, Jost } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--jost",
});

export const metadata: Metadata = {
  title:
    "Buy Clicks to Clients: A No-fluff Guide to Master customer Generation Using Meta Ads",
  description:
    "Does your business depend on high-quality leader? If yes, this e-book is a must buy for you. Includes 20 chapters to teach you run leader gen campaign on Meta and get high-quality leader.",
  verification: {
    google: "44Rmy3ZKT9r-Dc0zZPvE-nZVsYkNf7X3_J0oumNUXmc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={`${dmSans.className} ${jost.variable} bg-bgDark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
