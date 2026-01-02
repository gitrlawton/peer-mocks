import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mock Interview Platform",
  description: "Find and arrange peers to practice tech interviews with",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
