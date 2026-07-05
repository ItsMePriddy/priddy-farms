import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Priddy Farms — Millington & Bartlett, TN",
  description: "Family-owned farm in the Mid-South. Pumpkin patch, corn maze, Christmas trees, summer camp, and more. Two locations — one warm welcome.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
