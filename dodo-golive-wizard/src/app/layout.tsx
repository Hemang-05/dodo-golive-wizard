import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dodo Payments — Go Live Wizard",
  description: "Get your first transaction in minutes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
