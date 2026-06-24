/*
 * About — bold editorial about page
 * Clean layout, no carousel (images sized properly)
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const TORRAN_HEADSHOT = "/images/torran-transparent.webp";
const HERO_BG = "/images/about-hero.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Get to know us</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>About Us</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="#E8531D" />
        </svg>
      </div>

      {/* ── FOUNDER ── */}
      <section style={{ backgroundColor: "#E8531D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "85%", height: "75%", backgroundColor: "#0F1B2D", borderRadius: "8px" }} />
                <img src={TORRAN_HEADSHOT} alt="Torran Anderson" style={{ position: "relative", width: "100%", maxHeight: "480px", objectFit: "contain", objectPosition: "bottom", display: "block", zIndex: 1 }} />
              </div>
              <div style={{ position: "absolute", bottom: "-0.75rem", left: "50%", transform: "translateX(-50%) rotate(2deg)", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.5rem 1rem", boxShadow: "3px 3px 0 #0F1B2D", whiteSpace: "nowrap", zIndex: 2 }}>
                Author & Educator
              </div>
            </div>
            <div>
              <div className="script-label mb-2" style={{ color: "#F5C842" }}>Meet the founder</div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white" }}>Torran Anderson</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "1rem" }}>
                Torran Anderson is an author, educator, and community storyteller based in Tucson, Arizona. His debut novel, <em>Songcoming</em>, was praised by Pine Reads Review as "edgy, inventive, and sincere" — a novel that "gives the reader a new look at an old medium."
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "1rem" }}>
                His upcoming YA novel-in-verse, <em>Piñata Moon</em>, is set in Tucson and explores teen grief, the desert night, and the will to keep living. It has already received early praise from the Arizona Daily Star.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "1.75rem" }}>
                Beyond books, Torran creates storytelling games like StoryGrow, leads workshops globally, and publishes educational books through Reading A-Z.
              </p>
              <blockquote style={{ borderLeft: "4px solid #F5C842", paddingLeft: "1.25rem", marginBottom: "1.75rem" }}>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", fontStyle: "italic", color: "white", lineHeight: 1.65 }}>
                  "Let's work together to make stories accessible for everyone."
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/torrananderson/" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-yellow no-underline" style={{ fontSize: "0.85rem" }}>LinkedIn →</a>
                <a href="/books" className="btn-pill btn-pill-outline-white no-underline" style={{ fontSize: "0.85rem" }}>See His Books</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#E8531D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="#F5F0EB" />
        </svg>
      </div>

      {/* ── OUR STORY ── */}
      <section style={{ backgroundColor: "#F5F0EB", paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="text-center">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>Our mission</div>
            <h2 className="display-heading mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>
              Making Stories Accessible For Everyone
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
              At the <strong>Center for Storytelling Innovation</strong>, we believe stories shape how we learn, connect, and imagine. Whether in the pages of a book, gathered around a game, or inside a creative workshop — stories help us see ourselves and each other in new ways.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)" }}>
              Founded by <strong>Torran Anderson</strong>, the Center began with a vision to bring meaningful storytelling into everyday life. What started as a small idea has grown into a curated collection that sparks curiosity, connection, and creativity for people of all ages. The Center is an online hub for books, games, workshops, and projects — making storytelling accessible to everyone through Germination Games like StoryGrow, novels-in-verse, and community action activities.
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ backgroundColor: "white", borderTop: "2.5px solid #0F1B2D", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>What drives us</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#0F1B2D" }}>Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Imagination", desc: "Storytelling has the power to create lasting impact. We value imagination that sparks new ideas and opens new worlds.", color: "#E8531D" },
              { title: "Connection", desc: "Connection that brings people together. We are committed to making storytelling accessible to everyone, everywhere.", color: "#1A8C7A" },
              { title: "Integrity", desc: "Integrity that honors authentic voices. Care and respect for the communities and creators behind every narrative.", color: "#F5C842" },
            ].map((v) => (
              <div key={v.title} style={{ backgroundColor: v.color, padding: "1.75rem", border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #0F1B2D" }}>
                <h3 className="display-heading mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: v.color === "#F5C842" ? "#0F1B2D" : "white", lineHeight: 1.1 }}>{v.title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: v.color === "#F5C842" ? "rgba(15,27,45,0.8)" : "rgba(255,255,255,0.88)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ backgroundColor: "#0F1B2D", padding: "2.5rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: "25+", label: "Books Published" },
              { num: "100+", label: "Workshops" },
              { num: "3", label: "Continents" },
            ].map((stat) => (
              <div key={stat.label} style={{ padding: "1.25rem 0.75rem", textAlign: "center" }}>
                <div className="display-heading" style={{ fontSize: "2.5rem", color: "#F5C842" }}>{stat.num}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "0.2rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PHOTO GRID ── */}
      <section style={{ backgroundColor: "white", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: IMAGES.heroWorkshop, alt: "Workshop classroom" },
              { src: IMAGES.groupOutdoor, alt: "Group outdoors" },
              { src: IMAGES.upwardBoundWorkshop, alt: "Upward Bound" },
              { src: IMAGES.pinataEvent, alt: "Piñata event" },
            ].map((img, i) => (
              <div key={i} style={{ height: "200px", overflow: "hidden", border: "2.5px solid #0F1B2D", boxShadow: i % 2 === 0 ? "3px 3px 0 #E8531D" : "3px 3px 0 #0F1B2D" }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section style={{ backgroundColor: "#F5F0EB", borderTop: "2.5px solid #0F1B2D", paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Our community</div>
          <h2 className="display-heading mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>
            Built Around Shared Imagination
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)" }}>
            Storytelling Innovation is more than a storefront — it's a space built around shared imagination and connection. Our community includes readers, players, educators, and community members who believe in the power of storytelling to inspire and unite. Whether exploring a book, playing a game, or attending a workshop — we celebrate creativity, learning, and the joy of stories. Together, we keep storytelling alive, relevant, and full of possibility.
          </p>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ backgroundColor: "#F5C842", borderTop: "2.5px solid #0F1B2D", borderBottom: "2.5px solid #0F1B2D", padding: "3rem 0" }}>
        <div className="container text-center">
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Join us</div>
          <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>Ready to Explore?</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/books" className="btn-pill btn-pill-navy no-underline">Browse Books</a>
            <a href="/contact" className="btn-pill btn-pill-outline no-underline">Get in Touch</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
