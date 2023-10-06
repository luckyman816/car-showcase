import { Metadata } from "next";

import { Footer, Navbar } from "@/components";
import "./globals.css";

// metadata
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
  authors: [{ name: "Sanidhya Kr. Verma", url: "https://github.com/sanidhyy" }],
  themeColor: "#2B59FF",
  manifest: "/manifest.json",
};

// page layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* navbar */}
        <Navbar />
        {/* main */}
        <main>{children}</main>
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
