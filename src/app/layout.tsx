import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little World",
  description: "A little place to make big things.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
