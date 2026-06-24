/*
 * Song of the Santa Cruz River — Individual book detail page
 * Content sourced from storytellinginnovation.com/song-of-the-santa-cruz-river/
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BOOK_COVER = "/images/santa-cruz-river-cover.jpg";

export default function SantaCruzRiver() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO — Lush riverbank inspired by book cover ── */}
      <section
        style={{
          position: "relative",
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(180deg, #2d5a1e 0%, #3a6b28 25%, #4a7a35 50%, #3d6a2a 75%, #1a3a12 100%)",
        }}
      >
        {/* Warm sunlight glow from top right */}
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "10%",
            width: "clamp(200px, 30vw, 400px)",
            height: "clamp(200px, 30vw, 400px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,220,100,0.25) 0%, rgba(255,200,50,0.08) 50%, transparent 70%)",
          }}
        />
        {/* Water reflection at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: "linear-gradient(to top, rgba(60,130,180,0.3) 0%, rgba(60,130,180,0.08) 50%, transparent 100%)",
          }}
        />
        {/* Subtle water line */}
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)",
          }}
        />
        {/* Butterfly dots */}
        {[
          { top: "25%", left: "15%", size: 5, color: "#FFD600" },
          { top: "30%", left: "22%", size: 4, color: "#FFD600" },
          { top: "20%", right: "25%", size: 6, color: "#FFD600" },
          { top: "35%", right: "35%", size: 3, color: "#FFD600" },
          { top: "28%", left: "45%", size: 4, color: "#FFD600" },
          { top: "18%", left: "60%", size: 5, color: "#FFA500" },
          { top: "40%", left: "8%", size: 3, color: "#FFA500" },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              ...dot,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              borderRadius: "50%",
              backgroundColor: dot.color,
              opacity: 0.5,
              boxShadow: `0 0 ${dot.size * 3}px ${dot.color}60`,
            }}
          />
        ))}
        {/* Leaf-like accents */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "60px",
            height: "80px",
            background: "radial-gradient(ellipse at center, rgba(80,140,50,0.3) 0%, transparent 70%)",
            transform: "rotate(-30deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "8%",
            width: "50px",
            height: "70px",
            background: "radial-gradient(ellipse at center, rgba(80,140,50,0.25) 0%, transparent 70%)",
            transform: "rotate(20deg)",
          }}
        />
        {/* Dark overlay for text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,22,15,0.45)",
          }}
        />
        <div className="container relative z-10 py-20">
          <div className="script-label mb-2" style={{ color: "#FFD600", fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}>Trilingual Children's Book</div>
          <h1
            className="display-heading"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: "white",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Song of the<br />Santa Cruz River
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", marginTop: "0.5rem", maxWidth: "500px" }}>
            By Torran Anderson & Mabel Rivera · Illustrated by Bill Singleton
          </p>
        </div>
        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, zIndex: 10 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── BOOK SUMMARY + COVER ── */}
      <section style={{ backgroundColor: "white", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Cover */}
            <div style={{ flex: "0 0 auto", width: "320px", maxWidth: "100%" }}>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #1A8C7A", overflow: "hidden", backgroundColor: "#F5F0EB" }}>
                <img
                  src={BOOK_COVER}
                  alt="Song of the Santa Cruz River book cover"
                  style={{ width: "100%", display: "block", objectFit: "contain" }}
                />
              </div>
              {/* Buy button */}
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://desertinkpress.org/products/song-of-the-santa-cruz-river"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-orange no-underline text-center"
                  style={{ fontSize: "0.85rem", display: "block" }}
                >
                  Buy Now — Desert Ink Press
                </a>
              </div>
            </div>

            {/* Summary */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#1A8C7A",
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                Picture Book
              </div>
              <h2 className="display-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#0F1B2D", marginBottom: "1.25rem" }}>
                About the Book
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                A beautifully illustrated trilingual children's book that explores the river at the heart of Tucson, highlighting its wildlife and importance to the region. The story follows the river's history — from the first O'odham communities, through Spanish settlement and later water depletion, to today's community efforts to restore and revitalize the river.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(15,27,45,0.65)", marginBottom: "1.5rem" }}>
                All proceeds go to providing free copies of this book to the community.
              </p>

              {/* Book details */}
              <div
                style={{
                  padding: "1rem 1.25rem",
                  backgroundColor: "#F5F0EB",
                  border: "2px solid #0F1B2D",
                  borderLeft: "5px solid #1A8C7A",
                }}
              >
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#1A8C7A", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Book Details
                </p>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", color: "#0F1B2D", lineHeight: 1.8 }}>
                  <p><strong>Authors:</strong> Torran Anderson & Mabel Rivera</p>
                  <p><strong>Illustrator:</strong> Bill Singleton</p>
                  <p><strong>Languages:</strong> English, Spanish, O'odham</p>
                  <p><strong>Publisher:</strong> Desert Ink Press</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#1A8C7A", paddingTop: "3.5rem", paddingBottom: "3.5rem", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", marginBottom: "1rem" }}>
            Get Your Copy Today
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: "2rem" }}>
            All proceeds support free book distribution to the community.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://desertinkpress.org/products/song-of-the-santa-cruz-river"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "white",
                color: "#1A8C7A",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                border: "2.5px solid white",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
              }}
            >
              Buy Now
            </a>
            <a
              href="/books"
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                border: "2.5px solid white",
              }}
            >
              ← Back to All Books
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
