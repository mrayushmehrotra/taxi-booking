import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxi Boking App",
  description:
    "Best Taxies and Rates of the Taxi you will ever get on the enitre earth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
