"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/fall-festival", label: "Fall Festival" },
  { href: "/christmas", label: "Christmas" },
  { href: "/parties-events", label: "Parties & Events" },
];

const navLinkBase: React.CSSProperties = {
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 15,
  padding: "8px 13px",
  borderRadius: 999,
};

const navLinkActive: React.CSSProperties = {
  ...navLinkBase,
  color: "#33261A",
  background: "#F3E7CE",
  fontWeight: 800,
};

const navLinkInactive: React.CSSProperties = {
  ...navLinkBase,
  color: "#6B5843",
};

const ctaStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#FBF3E0",
  background: "#8A3324",
  fontWeight: 800,
  fontSize: 15,
  padding: "8px 16px",
  borderRadius: 999,
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      data-screen-label="Header"
      style={{
        background: "#FFFDF6",
        borderBottom: "1px solid #E3D5B8",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={"/logo.png"}
            alt="Priddy Farms"
            style={{ height: 54, width: "auto", display: "block" }}
          />
        </Link>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={isActive ? navLinkActive : navLinkInactive}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/visit" style={ctaStyle}>
            Visit Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
