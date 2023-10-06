import { Footer, Navbar } from "@/components";
import "./globals.css";

// metadata interface
interface Metadata {
  title: string;
  description: string;
}

// metadata
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
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
