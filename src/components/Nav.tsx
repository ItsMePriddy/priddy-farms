"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", theme: "home" },
  { href: "/pumpkin-patch", label: "Pumpkin Patch", theme: "pumpkin-patch" },
  { href: "/christmas-trees", label: "Christmas Trees", theme: "christmas" },
  { href: "/summer-camp", label: "Summer Camp", theme: "summer-camp" },
  { href: "/millington", label: "Millington", theme: "home" },
  { href: "/bartlett", label: "Bartlett", theme: "home" },
  { href: "/visit", label: "Visit", theme: "home" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-farm-cream)]/90 backdrop-blur border-b border-[var(--color-farm-wheat)]">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🚜</span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "Georgia, serif", color: "var(--color-farm-dark)" }}
          >
            Priddy Farms
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                    isActive
                      ? "bg-[var(--color-farm-brown)] text-white"
                      : "text-[var(--color-farm-dark)] hover:bg-[var(--color-farm-wheat)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <details className="md:hidden group">
          <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-[var(--color-farm-wheat)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <ul className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-2 min-w-[200px] list-none m-0 border border-[var(--color-farm-wheat)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 rounded-md text-sm no-underline ${
                      isActive
                        ? "bg-[var(--color-farm-brown)] text-white"
                        : "text-[var(--color-farm-dark)] hover:bg-[var(--color-farm-wheat)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>
      </nav>
    </header>
  );
}
