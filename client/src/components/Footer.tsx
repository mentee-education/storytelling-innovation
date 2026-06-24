/*
 * Footer — 826-inspired bold editorial footer
 * Dark navy background, white text, orange accents
 * Wave top divider, bold display heading, nav links
 */
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";

const LOGO = IMAGES.userLogo;

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F1B2D", color: "white" }}>
      {/* Wave top divider */}
      <div style={{ backgroundColor: "white", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      <div className="container pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4" style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "white", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Center for
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#E8531D", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Storytelling Innovation
              </div>
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: "260px", marginBottom: "1.25rem" }}>
              Making storytelling accessible to everyone — through books, games, workshops, and community.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/torran-anderson/" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", color: "white" }} title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:torran.ian.anderson@gmail.com" className="no-underline" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", color: "white" }} title="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8531D", marginBottom: "1.25rem" }}>
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Books", href: "/books" },
                { label: "Games", href: "/games" },
                { label: "Workshops", href: "/workshops" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="no-underline transition-opacity hover:opacity-100" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8531D", marginBottom: "1.25rem" }}>
              Support the Mission
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              Your support helps us bring storytelling workshops, books, and games to communities that need them most.
            </p>
            <a href="https://buymeacoffee.com/storytellinginnovation" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline" style={{ fontSize: "0.85rem", padding: "0.55rem 1.4rem" }}>
              Donate Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            © {new Date().getFullYear()} Center for Storytelling Innovation · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
