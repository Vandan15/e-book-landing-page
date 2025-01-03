import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Buy Clicks to Clients: A No-fluff Guide to Master Lead Generation Using Meta Ads",
  description:
    "Does your business depend on high-quality leads? If yes, this e-book is a must buy for you. Includes 20 chapters to teach you run lead gen campaign on Meta and get high-quality leads.",
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
      <body className={`${dmSans.className} bg-bgDark antialiased`}>
        {children}
      </body>
    </html>
  );
}
