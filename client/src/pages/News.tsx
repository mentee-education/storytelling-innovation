/*
 * News — bold editorial news page
 * Content sourced from storytellinginnovation.com/news/
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsItems = [
  {
    date: "May 9, 2026",
    category: "Review",
    categoryColor: "#7B2D8E",
    title: "School Library Journal Review of Songcoming",
    excerpt:
      "A beautiful cross between a romance and fantasy story. Eve happens upon a merman named Oorin by chance at the river. Both characters are struggling to accept life's fate: Eve, a hideous betrothal; and Oorin, a lost rite of passage. VERDICT: Teens are sure to fall in love with this fairy-tale romance.",
    img: "/images/news-slj-review.png",
    link: "",
    featured: true,
  },
  {
    date: "February 4, 2026",
    category: "Fellowship",
    categoryColor: "#1A8C7A",
    title: "Fellowships Across the Globe: Torran Anderson's Path to Creative Storytelling",
    excerpt:
      "Fellowships have a way of opening doors you did not even know existed. They lead across continents, into classrooms and communities, and toward entirely new ways of seeing the world. For Torran Anderson, fellowships became catalysts for creativity, storytelling, and connection. As a multi-fellowship winner — including the Mira, Rotary Peace, and Fulbright — Torran's journey spans the globe.",
    img: "/images/news-fellowships.jpg",
    link: "",
    featured: false,
  },
  {
    date: "February 4, 2026",
    category: "Interview",
    categoryColor: "#0F1B2D",
    title: "Pine Reads \u2013 Interview with Torran Anderson",
    excerpt:
      "Torran Anderson is from the desert town of Tucson, Arizona. He has published over 50 books and loves doing writing workshops with schools and community groups. Torran is currently working on his Tiny Things project as part of the Pi\u00f1ata Moon book.",
    img: "/images/news-pine-reads.png",
    link: "",
    featured: false,
  },
  {
    date: "February 4, 2026",
    category: "Podcast",
    categoryColor: "#E8531D",
    title: "JV Club Podcast \u2013 Torran Anderson",
    excerpt:
      "Episode #422: Torran Anderson \u2014 Our first official Boy of Summer is JV's wonderful and dear lifelong (from 4th grade onward!) friend, author Torran Anderson (Pi\u00f1ata Moon). Hear about the amazing work Torran is doing in partnership with the Navajo nation, and memories that Torran and JV share from their own teen years in Tucson, AZ.",
    img: "/images/news-jv-club.jpg",
    link: "",
    featured: false,
  },
];

export default function News() {
  const featured = newsItems.find((n) => n.featured);
  const rest = newsItems.filter((n) => !n.featured);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "45vh",
          display: "flex",
          alignItems: "flex-start",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0F1B2D 0%, #1a3050 40%, #0F1B2D 100%)",
        }}
      >
        {/* Decorative accent circles */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: "clamp(150px, 25vw, 350px)",
            height: "clamp(150px, 25vw, 350px)",
            borderRadius: "50%",
            border: "2px solid rgba(245,200,66,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "12%",
            width: "clamp(80px, 15vw, 200px)",
            height: "clamp(80px, 15vw, 200px)",
            borderRadius: "50%",
            border: "2px solid rgba(232,83,29,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            left: "5%",
            width: "clamp(60px, 10vw, 120px)",
            height: "clamp(60px, 10vw, 120px)",
            borderRadius: "50%",
            backgroundColor: "rgba(245,200,66,0.08)",
          }}
        />
        <div className="container relative z-10 pt-8 pb-16">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>
            What's happening
          </div>
          <h1
            className="display-heading"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}
          >
            News
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.65)",
              marginTop: "0.5rem",
              maxWidth: "500px",
            }}
          >
            Interviews, reviews, fellowships, and updates from the Center for
            Storytelling Innovation.
          </p>
        </div>
        {/* Wave bottom */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, zIndex: 10 }}>
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", width: "100%" }}
          >
            <path
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── FEATURED STORY ── */}
      {featured && (
        <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="container">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>
              Latest story
            </div>
            <div
              style={{
                border: "2.5px solid #0F1B2D",
                boxShadow: "6px 6px 0 #E8531D",
                overflow: "hidden",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "320px" }}>
                <div
                  style={{
                    overflow: "hidden",
                    borderRight: "2.5px solid #0F1B2D",
                    minHeight: "280px",
                  }}
                >
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-contain"
                    style={{ backgroundColor: "#0F1B2D" }}
                  />
                </div>
                <div
                  style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: featured.categoryColor,
                        color: "white",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.7rem",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "rgba(15,27,45,0.5)",
                      }}
                    >
                      {featured.date}
                    </span>
                  </div>
                  <h2
                    className="display-heading mb-3"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "#0F1B2D",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "rgba(15,27,45,0.75)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill btn-pill-orange no-underline"
                      style={{ alignSelf: "flex-start", fontSize: "0.85rem" }}
                    >
                      Read More &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ALL NEWS ── */}
      <section style={{ backgroundColor: "white", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="script-label mb-1" style={{ color: "#E8531D" }}>
                All updates
              </div>
              <h2
                className="display-heading"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  color: "#0F1B2D",
                }}
              >
                Recent Stories
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((item) => (
              <div
                key={item.title}
                style={{
                  border: "2.5px solid #0F1B2D",
                  boxShadow: "3px 3px 0 #E8531D",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    borderBottom: "2.5px solid #0F1B2D",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  style={{
                    padding: "1.25rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span
                      style={{
                        backgroundColor: item.categoryColor,
                        color: "white",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.5rem",
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "rgba(15,27,45,0.45)",
                      }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h3
                    className="display-heading"
                    style={{ fontSize: "1.4rem", color: "#0F1B2D", lineHeight: 1.2 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.65,
                      color: "rgba(15,27,45,0.7)",
                      flex: 1,
                    }}
                  >
                    {item.excerpt}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.75rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#E8531D",
                        textDecoration: "none",
                        marginTop: "0.5rem",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Read More &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{ backgroundColor: "#0F1B2D", borderTop: "2.5px solid #0F1B2D", padding: "3rem 0 4rem" }}
      >
        <div className="container text-center">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>
            Stay in the loop
          </div>
          <h2
            className="display-heading mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white" }}
          >
            Want to Collaborate
            <br />
            or Stay Connected?
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="btn-pill btn-pill-orange no-underline">
              Get in Touch &rarr;
            </a>
            <a
              href="https://www.youtube.com/@torrananderson2084"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline-white no-underline"
            >
              Follow on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA / Footer divider ── */}
      <div style={{ backgroundColor: "#0F1B2D" }}>
        <div className="container">
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(245,200,66,0.3), rgba(232,83,29,0.4), rgba(245,200,66,0.3), transparent)" }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
