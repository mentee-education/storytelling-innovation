/*
 * Workshops — 826-inspired bold editorial workshops page
 * Real images from storytellinginnovation.com
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = "/images/workshops-hero-gen.png";    // Generated workshop scene
const WORKSHOP_PHOTO = IMAGES.upwardBoundWorkshop; // Piñata event
const UB_COVID = IMAGES.torranTeachingCsi;         // Torran teaching at CSI
const NORWEGIAN = IMAGES.workshopKautz;            // Writing hand
const JUNE_WORKSHOP = IMAGES.teachersWorkshopCooper;
const PICTURE1_JAN = IMAGES.pinataEvent;           // Writing hand close-up
const INTERVIEW_LEGACY = IMAGES.interviewLegacy;   // CSI logo
const IMG_7640 = IMAGES.groupOutdoor;              // Group outdoors
const PERSONAL_STATEMENTS = IMAGES.torranClassroomSelfie; // Torran portrait
const CLI_FI = IMAGES.torranNorwayClassSelfie;     // Torran outdoor portrait

const GALLERY_CAROUSEL = [
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/Odin-and-Torran-photo-768x1024.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/DSC08155-1024x683.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/Monsoon-poem.png",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/chula-photo-1024x768.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/2-cli-fi-picture-2.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/Upward-Bound_2020Summer_Writing-Workshop_PinataMoon2-3-1024x744.png",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/3-earth-day-carol-2.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/cropped-personal-statements-2.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/norwegian-students-2-1024x576.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/playing-game-with-students-1024x586.png",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/Picture2.jpg",
];

export default function Workshops() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 15%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Learn & create together</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>Workshops</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>


      {/* ── WORKSHOP TYPES ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="script-label mb-1" style={{ color: "#E8531D" }}>What we offer</div>
              <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Workshop Programs</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
              {
                title: "Creative Writing Workshops",
                img: IMAGES.heroWorkshop,
                badge: "K-12 & Community",
                badgeBg: "#E8531D",
                desc: "Hands-on creative writing workshops for students and community members. Participants explore personal narrative, poetry, fiction, and more — guided by prompts, games, and collaborative exercises.",
                features: ["Personal narrative writing", "Poetry & verse", "Collaborative storytelling", "Peer sharing & feedback"],
              },
              {
                title: "Novel-in-Verse Workshops",
                img: IMAGES.torranClassroomSelfie,
                badge: "High School & College",
                badgeBg: "#0F1B2D",
                desc: "Deep-dive workshops exploring the novel-in-verse form — how poetry and narrative intersect, how verse can carry a story, and how to find your own voice in this hybrid genre.",
                features: ["Verse structure & form", "Narrative arc in poetry", "Voice & perspective", "Workshop critique sessions"],
              },
            ].map((workshop) => (
              <div key={workshop.title} style={{ border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #E8531D", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "240px", overflow: "hidden", borderBottom: "2.5px solid #0F1B2D" }}>
                  <img src={workshop.img} alt={workshop.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: workshop.badgeBg, color: (workshop as { badgeColor?: string }).badgeColor || "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.7rem", transform: "rotate(-2deg)" }}>
                    {workshop.badge}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 className="display-heading mb-3" style={{ fontSize: "1.75rem", color: "#0F1B2D" }}>{workshop.title}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(15,27,45,0.7)", marginBottom: "1rem" }}>{workshop.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.features.map((f) => (
                      <span key={f} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.25rem 0.6rem", backgroundColor: "#F5F0EB", color: "#0F1B2D", border: "1.5px solid #0F1B2D" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── MISSION STATEMENT ── */}
          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", padding: "3.5rem 0" }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)" }}>
              We believe stories have the power to reframe narratives and inspire action. Each workshop is guided by respect for community priorities and needs. We collaborate closely with partners to bring their stories to life — as co-creators committed to amplifying voices and advancing education, resilience, and self-determination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
              {
                title: "Educator Workshops",
                img: IMAGES.torranTeachingCsi,
                badge: "Teachers & Facilitators",
                badgeBg: "#1A8C7A",
                desc: "Professional development workshops for teachers and community educators. Learn how to integrate storytelling, games, and creative writing into your curriculum or programming.",
                features: ["Curriculum integration", "StoryGrow facilitation", "Community Action Deck", "Assessment strategies"],
              },
              {
                title: "Community Storytelling",
                img: IMAGES.groupOutdoor,
                badge: "All Ages",
                badgeBg: "#F5C842",
                badgeColor: "#0F1B2D",
                desc: "Inclusive storytelling workshops for community organizations, libraries, nonprofits, and cultural groups. These sessions celebrate diverse voices and build community through shared narrative.",
                features: ["Oral storytelling traditions", "Intergenerational stories", "Community memory projects", "Multilingual support"],
              },
            ].map((workshop) => (
              <div key={workshop.title} style={{ border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #E8531D", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "240px", overflow: "hidden", borderBottom: "2.5px solid #0F1B2D" }}>
                  <img src={workshop.img} alt={workshop.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: workshop.badgeBg, color: (workshop as { badgeColor?: string }).badgeColor || "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.7rem", transform: "rotate(-2deg)" }}>
                    {workshop.badge}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 className="display-heading mb-3" style={{ fontSize: "1.75rem", color: "#0F1B2D" }}>{workshop.title}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(15,27,45,0.7)", marginBottom: "1rem" }}>{workshop.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.features.map((f) => (
                      <span key={f} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.25rem 0.6rem", backgroundColor: "#F5F0EB", color: "#0F1B2D", border: "1.5px solid #0F1B2D" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      {/* ── UPWARD BOUND ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: "inline-block", backgroundColor: "#E8531D", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(-2deg)", boxShadow: "3px 3px 0 rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
                Featured Program
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}>Upward Bound Writing Workshop</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
                The Upward Bound Writing Workshop is a multi-week creative writing program for high school students preparing for college. Participants explore personal narrative, poetry, and fiction — developing their voices and building confidence as writers.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1.75rem" }}>
                The program uses <em>Piñata Moon</em> as a central text — exploring how a novel-in-verse can speak to real teen experiences of grief, identity, and resilience in the Tucson desert.
              </p>
              <a href="/contact" className="btn-pill btn-pill-orange no-underline">Book a Workshop →</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div style={{ gridColumn: "span 2", height: "240px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                <img src={PICTURE1_JAN} alt="Upward Bound workshop" className="w-full h-full object-cover object-center" />
              </div>
              <div style={{ height: "180px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                <img src={PERSONAL_STATEMENTS} alt="Personal statements" className="w-full h-full object-cover object-top" />
              </div>
              <div style={{ height: "180px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                <img src={CLI_FI} alt="Cli-fi workshop" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── TESTIMONIAL ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="text-center mb-6">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>What educators say</div>
          </div>
          <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #E8531D", backgroundColor: "white", padding: "2.5rem 3rem" }}>
            <div style={{ fontSize: "3rem", color: "#E8531D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, lineHeight: 1, marginBottom: "1rem" }}>"</div>
            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.85)", fontStyle: "italic", marginBottom: "1.5rem" }}>
              Torran Anderson is one of the most engaging guest authors we've had visit our high school. The time passed altogether too quickly, with most of it spent stretching the students' creativity. His visit was packed with student-centered activities that were interesting and accessible to the wide range of students in the group. The activities related to his book <em>Piñata Moon</em>, a compelling novel in verse that follows a Tucson teen struggling to make sense of his life in the aftermath of a friend's suicide. The novel handles the topic of suicide in a graceful, life-affirming way. I would highly recommend making it required reading for your class before his visit to make the time even more meaningful for your students. <em>Piñata Moon</em> could start an important conversation in your classroom about mental health and the lyrical writing will inspire your student writers. It was truly a privilege to have Torran Anderson visit, and we hope to have him return in the future!
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#E8531D" }} />
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "#0F1B2D", margin: 0 }}>Paige Riffle</p>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", color: "rgba(15,27,45,0.6)", margin: 0 }}>TVHS Librarian / Technology Integration Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY CAROUSEL ── */}
      <section style={{ backgroundColor: "white", padding: "3rem 0", overflow: "hidden" }}>
        <div className="container mb-6">
          <div className="text-center">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>From the field</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Workshop Gallery</h2>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", animation: "scroll-left 40s linear infinite", width: "max-content" }}>
          {[...GALLERY_CAROUSEL, ...GALLERY_CAROUSEL].map((src, i) => (
            <div key={i} style={{ width: "280px", height: "200px", flexShrink: 0, overflow: "hidden", border: "2.5px solid #0F1B2D" }}>
              <img src={src} alt={`Workshop gallery ${(i % GALLERY_CAROUSEL.length) + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ backgroundColor: "#F5C842", borderTop: "2.5px solid #0F1B2D", borderBottom: "2.5px solid #0F1B2D", padding: "3rem 0" }}>
        <div className="container text-center">
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Ready to collaborate?</div>
          <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>Book a Workshop<br />for Your Community</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="btn-pill btn-pill-navy no-underline">Get in Touch →</a>
            <a href="/games" className="btn-pill btn-pill-outline no-underline">Explore Our Games</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
