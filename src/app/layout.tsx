import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tal Saxophone | Premium Saxophonist Amsterdam",
  description: "Live Saxophone by Tal Berlinsky. From intimate Amsterdam weddings to high-energy European nightlife.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-luxury-black text-foreground">
        {children}
      </body>
    </html>
  );
}
