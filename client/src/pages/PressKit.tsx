/*
 * Press Kit — bold editorial press kit page
 * Content sourced from storytellinginnovation.com/press-kit/
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";
import { Mail, Award } from "lucide-react";

const HERO_BG = "/images/presskit-hero.png";
const TORRAN_HEADSHOT = "/images/torran-headshot.jpg";
const SANTA_CRUZ_COVER = "/images/santa-cruz-river-cover.jpg";

export default function PressKit() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* HERO — split layout: text left, image right */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh", display: "flex", backgroundColor: "#0A1628" }}>
        {/* Left: text on solid dark background */}
        <div className="relative z-10 flex-1 flex items-center" style={{ minHeight: "50vh" }}>
          {/* Diagonal accent */}
          <div
            className="absolute top-0 right-0 w-32 h-full opacity-10 hidden md:block"
            style={{ background: "linear-gradient(135deg, #FFD600 0%, transparent 100%)" }}
          />
          <div className="relative w-full px-8 md:px-16 py-20 max-w-2xl ml-auto">
            <p style={{ fontFamily: "'Caveat', cursive", color: "#FFD600", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              For media & partners
            </p>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 0.95,
                textTransform: "uppercase",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Press<br /><span style={{ color: "#FFD600" }}>Kit</span>
            </h1>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.15rem", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", maxWidth: "480px", marginBottom: "2rem" }}>
              Everything you need to know about Torran Anderson & the Center for Storytelling Innovation.
            </p>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 transition-colors"
                style={{
                  backgroundColor: "#FFD600",
                  color: "#0A1628",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.9rem 2rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Mail size={16} /> Media Inquiries
              </button>
            </Link>
          </div>
        </div>
        {/* Right: generated image with smooth blend */}
        <div className="hidden md:block relative" style={{ flex: "0 0 45%", overflow: "hidden" }}>
          <img
            src={HERO_BG}
            alt="Press workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Smooth gradient blend from dark left into image */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1628 0%, rgba(10,22,40,0.7) 15%, rgba(10,22,40,0.3) 35%, transparent 55%)" }} />
          {/* Subtle bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to top, #0A1628 0%, transparent 100%)" }} />
          {/* Subtle top gradient */}
          <div className="absolute top-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to bottom, #0A1628 0%, transparent 100%)" }} />
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section style={{ backgroundColor: "white", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Headshot with accent frame */}
            <div className="flex justify-center">
              <div style={{ position: "relative", maxWidth: "380px", width: "100%" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    right: "-12px",
                    bottom: "-12px",
                    border: "3px solid #FFD600",
                  }}
                />
                <img
                  src={TORRAN_HEADSHOT}
                  alt="Torran Anderson headshot"
                  style={{ position: "relative", width: "100%", display: "block", zIndex: 1 }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1rem",
                    left: "1.5rem",
                    backgroundColor: "#FF5A36",
                    color: "white",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.5rem 1rem",
                    zIndex: 2,
                  }}
                >
                  Founder & Author
                </div>
              </div>
            </div>
            {/* Bio text */}
            <div>
              <p style={{ fontFamily: "'Caveat', cursive", color: "#FF5A36", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                About the author
              </p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  textTransform: "uppercase",
                  color: "#0A1628",
                  marginBottom: "1.5rem",
                  lineHeight: 1,
                }}
              >
                Torran Anderson
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(10,22,40,0.8)", marginBottom: "1.5rem" }}>
                Torran Anderson is the founder of the Center for Storytelling Innovation. His YA novel-in-verse, <em>Pi&ntilde;ata Moon</em>, won the Paterson Prize for Books for Young People. He has published over 50 books, and the environmental story app <em>Earth Day Carol</em>. Forthcoming books include the YA novel-in-verse <em>Songcoming</em> (West 44 Books) and the environmental picture book <em>Song of the Santa Cruz River</em> (Desert Ink Press).
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(10,22,40,0.8)", marginBottom: "2rem" }}>
                Torran is open to working on books, games, and community engagement projects.
              </p>
              <Link href="/contact">
                <button
                  className="transition-colors hover:bg-[#FF5A36]"
                  style={{
                    backgroundColor: "#0A1628",
                    color: "white",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "0.9rem 2rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get in Touch &rarr;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATION */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily: "'Caveat', cursive", color: "#FF5A36", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                The organization
              </p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  textTransform: "uppercase",
                  color: "#0A1628",
                  marginBottom: "1.5rem",
                  lineHeight: 1,
                }}
              >
                The Center for<br />Storytelling Innovation
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(10,22,40,0.8)" }}>
                The Center for Storytelling Innovation is an online hub for books, games, workshops, and projects. It aims to make storytelling accessible to everyone through Germination Games like Story Grow and the Community Action deck. It addresses readers' needs through novels-in-verse and connects the community through story, engagement, and creative activities.
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "white",
                  padding: "3rem",
                  maxWidth: "320px",
                  width: "100%",
                  boxShadow: "6px 6px 0 #0A1628",
                  border: "2.5px solid #0A1628",
                }}
              >
                <img
                  src={IMAGES.userLogo}
                  alt="Center for Storytelling Innovation logo"
                  style={{ width: "100%", maxWidth: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section style={{ backgroundColor: "white", padding: "5rem 0" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "'Caveat', cursive", color: "#FF5A36", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Published works
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                textTransform: "uppercase",
                color: "#0A1628",
                lineHeight: 1,
              }}
            >
              Books
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Songcoming */}
            <div
              style={{
                border: "2.5px solid #0A1628",
                boxShadow: "5px 5px 0 #FFD600",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ backgroundColor: "#e8f0f5", padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "320px" }}>
                <img
                  src={IMAGES.songcomingCover}
                  alt="Songcoming book cover"
                  style={{ maxHeight: "280px", objectFit: "contain" }}
                />
              </div>
              <div style={{ padding: "1.5rem", borderTop: "3px solid #0A1628", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    textTransform: "uppercase",
                    color: "#0A1628",
                    marginBottom: "0.75rem",
                  }}
                >
                  Songcoming
                </h3>
                <blockquote
                  style={{
                    borderLeft: "3px solid #FFD600",
                    paddingLeft: "1rem",
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", fontStyle: "italic", color: "rgba(10,22,40,0.7)", lineHeight: 1.6 }}>
                    "Teens are sure to fall in love with this fairy-tale romance."
                  </p>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(10,22,40,0.5)", marginTop: "0.5rem" }}>
                    &mdash; School Library Journal
                  </p>
                </blockquote>
                <Link href="/songcoming">
                  <span
                    className="hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#FF5A36",
                      cursor: "pointer",
                    }}
                  >
                    Learn More &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* Pinata Moon */}
            <div
              style={{
                border: "2.5px solid #0A1628",
                boxShadow: "5px 5px 0 #FF5A36",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", backgroundColor: "#f5ede0", padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "320px" }}>
                <img
                  src={IMAGES.pinataMoonCover}
                  alt="Pinata Moon book cover"
                  style={{ maxHeight: "280px", objectFit: "contain" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: "#FFD600",
                    color: "#0A1628",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.35rem 0.7rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <Award size={12} /> Award Winner
                </div>
              </div>
              <div style={{ padding: "1.5rem", borderTop: "3px solid #FF5A36", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    textTransform: "uppercase",
                    color: "#0A1628",
                    marginBottom: "0.75rem",
                  }}
                >
                  Pi&ntilde;ata Moon
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", color: "rgba(10,22,40,0.7)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                  Winner of the Paterson Prize for Books for Young People and NM-AZ Book Prize for Poetry.
                </p>
                <Link href="/pinata-moon">
                  <span
                    className="hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#FF5A36",
                      cursor: "pointer",
                    }}
                  >
                    Learn More &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* Song of the Santa Cruz River */}
            <div
              style={{
                border: "2.5px solid #0A1628",
                boxShadow: "5px 5px 0 #FFD600",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ backgroundColor: "#e8f4e8", padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "320px" }}>
                <img
                  src={SANTA_CRUZ_COVER}
                  alt="Song of the Santa Cruz River book cover"
                  style={{ maxHeight: "280px", objectFit: "contain" }}
                />
              </div>
              <div style={{ padding: "1.5rem", borderTop: "3px solid #0A1628", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    textTransform: "uppercase",
                    color: "#0A1628",
                    marginBottom: "0.75rem",
                  }}
                >
                  Song of the Santa Cruz River
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", color: "rgba(10,22,40,0.7)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                  An environmental picture book celebrating the Santa Cruz River and the community it sustains.
                </p>
                <Link href="/song-of-the-santa-cruz-river">
                  <span
                    className="hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#FF5A36",
                      cursor: "pointer",
                    }}
                  >
                    Learn More &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA INQUIRIES CTA */}
      <section style={{ backgroundColor: "#FF5A36", padding: "5rem 0" }}>
        <div className="container mx-auto px-6 text-center">
          <p style={{ fontFamily: "'Caveat', cursive", color: "white", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              color: "white",
              marginBottom: "1rem",
              lineHeight: 1,
            }}
          >
            Media Inquiries
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", maxWidth: "550px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Interested in an interview, review copy, or collaboration? We'd love to hear from you.
          </p>
          <Link href="/contact">
            <button
              className="transition-colors hover:bg-[#0A1628]"
              style={{
                backgroundColor: "white",
                color: "#FF5A36",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1.1rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "1rem 2.5rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us &rarr;
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
