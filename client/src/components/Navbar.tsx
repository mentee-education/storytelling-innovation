/*
 * Navbar — matches original storytellinginnovation.com nav
 * Announcement bar + white sticky nav with dropdown submenus
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/images";

const LOGO = IMAGES.userLogo;

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "News",
    href: "/news",
    children: [{ label: "Press Kit", href: "/news" }],
  },
  {
    label: "Books",
    href: "/books",
    children: [
      { label: "All Books", href: "/books" },
      { label: "Songcoming", href: "/songcoming" },
      { label: "Piñata Moon", href: "/pinata-moon" },
    ],
  },
  { label: "Games", href: "/games" },
  { label: "Workshops", href: "/workshops" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "Contact", href: "/contact" },
];

function DropdownItem({ item, location }: { item: NavItem; location: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const active = location === item.href || item.children?.some((c) => location === c.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="no-underline px-3 py-2 transition-colors"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: active ? "#E8531D" : "#0F1B2D",
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 transition-colors"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: active ? "#E8531D" : "#0F1B2D",
          background: "none",
          border: "none",
        }}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 py-2 min-w-[180px] z-50"
          style={{
            backgroundColor: "white",
            border: "1px solid #E8E0D8",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          {item.children.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              className="no-underline block px-4 py-2 hover:bg-[#F5F0EB] transition-colors"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: location === child.href ? "#E8531D" : "#0F1B2D",
              }}
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div
        style={{
          backgroundColor: "#E8531D",
          color: "white",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "0.85rem",
          letterSpacing: "0.04em",
          textAlign: "center",
          padding: "0.45rem 1rem",
        }}
      >
        ⚡ Piñata Moon is available for preorder —{" "}
        <a
          href="/pinata-moon"
          style={{ color: "white", fontWeight: 800, textDecoration: "underline" }}
        >
          Order now →
        </a>
      </div>

      {/* Main nav */}
      <nav
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #E8E0D8",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: "72px" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
              <img
                src={LOGO}
                alt="Center for Storytelling Innovation"
                className="object-contain flex-shrink-0"
                style={{ height: "50px", width: "50px" }}
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#0F1B2D",
                    lineHeight: 1.1,
                  }}
                >
                  Center for
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#E8531D",
                    lineHeight: 1.1,
                  }}
                >
                  Storytelling
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#0F1B2D",
                    lineHeight: 1.1,
                  }}
                >
                  Innovation
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1" style={{ marginLeft: "2rem" }}>
              {navLinks.map((link) => (
                <DropdownItem key={link.label} item={link} location={location} />
              ))}
            </div>

            {/* Donate pill */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://buymeacoffee.com/storytellinginnovation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-orange no-underline"
                style={{ fontSize: "0.85rem", padding: "0.5rem 1.3rem" }}
              >
                Donate
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={22} color="#0F1B2D" />
              ) : (
                <Menu size={22} color="#0F1B2D" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "white", borderTop: "1px solid #E8E0D8" }}>
            <div className="container py-4 flex flex-col gap-0">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="no-underline py-3 px-1 block"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: location === link.href ? "#E8531D" : "#0F1B2D",
                      borderBottom: "1px solid #F0EAE2",
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      className="no-underline py-2 pl-6 block"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: location === child.href ? "#E8531D" : "rgba(15,27,45,0.6)",
                        borderBottom: "1px solid #F0EAE2",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <a
                href="https://buymeacoffee.com/storytellinginnovation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-orange mt-4 text-center no-underline"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
