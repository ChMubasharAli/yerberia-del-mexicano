import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yerberia del Mexicano",
  description:
    "Your local destination in Mesa, Arizona for traditional herbs, cultural products, spiritual items, and everyday essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
