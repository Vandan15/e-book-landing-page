import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "This Terms of Use explains how Clicks to Clients, a company based in India, collects, uses, and shares personal information when you use our website. By using our website, you agree to the terms of this Terms of Use.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
