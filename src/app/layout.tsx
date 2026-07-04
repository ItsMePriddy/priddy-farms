import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Theme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priddy Farms — Family Fun on the Farm",
  description:
    "Priddy Farms offers pumpkin patches, corn mazes, Christmas trees, summer camp, and family fun at two Memphis-area locations in Millington and Bartlett, TN.",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Millington", href: "/millington" },
  { label: "Bartlett", href: "/bartlett" },
  { label: "Pumpkin Patch", href: "/pumpkin-patch" },
  { label: "Christmas Trees", href: "/christmas-trees" },
  { label: "Summer Camp", href: "/summer-camp" },
  { label: "Visit", href: "/visit" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF5ED] text-[#3E2723]">
        <Theme theme={neutralTheme} mode="system">
          {/* Navigation */}
          <header
            className="sticky top-0 z-50 border-b"
            style={{
              background: "rgba(250, 245, 237, 0.9)",
              backdropFilter: "blur(8px)",
              borderColor: "#F5DEB3",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl no-underline"
                style={{ fontFamily: "Georgia, serif", color: "#3E2723" }}
              >
                🌾 Priddy Farms
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline"
                    style={{ color: "#3E2723" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/visit"
                className="hidden md:inline-block px-4 py-2 rounded-full text-sm font-semibold no-underline"
                style={{ background: "#C7511A", color: "#fff" }}
              >
                Visit Us
              </Link>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer
            className="w-full"
            style={{ background: "#3E2723", color: "#FFF8E7", padding: "48px 24px 32px" }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 32,
              }}
            >
              <div style={{ maxWidth: 320 }}>
                <span
                  className="text-lg font-semibold"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  🌾 Priddy Farms
                </span>
                <p className="text-sm mt-2" style={{ opacity: 0.8, lineHeight: 1.6 }}>
                  A family tradition of farming, fun, and togetherness in the
                  heart of Tennessee.
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider">Explore</span>
                <div className="flex flex-col gap-1 mt-2 text-sm" style={{ opacity: 0.8 }}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-inherit no-underline hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider">Contact</span>
                <p className="text-sm mt-2" style={{ opacity: 0.8 }}>
                  3805 West Union Rd<br />
                  Millington, TN 38053<br />
                  (901) 359-0800
                </p>
              </div>
            </div>
            <hr className="my-6" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
            <p className="text-xs text-center" style={{ opacity: 0.5 }}>
              &copy; {new Date().getFullYear()} Priddy Farms. All rights reserved.
            </p>
          </footer>
        </Theme>
      </body>
    </html>
  );
}
