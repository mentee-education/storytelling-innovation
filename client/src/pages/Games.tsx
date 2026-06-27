/*
 * Games — 826-inspired bold editorial games page
 * Real images from storytellinginnovation.com
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = "/images/games-hero-gen.png";
const STORYGROW_LOGO = IMAGES.germinationGamesLogo;
const STORYGROW_CARDS = IMAGES.storygrowCards;
const STORYGROW_CARDS2 = IMAGES.tinythingsCard;
const COMMUNITY_ACTION = "/images/community-action-box.png";
const COMMUNITY_ACTION2 = IMAGES.storygrowCards;
const WORKSHOP1 = IMAGES.heroWorkshop;
const PICTURE1_5 = IMAGES.writingHand;
const PICTURE2_7 = IMAGES.norwegianStudents;
const PICTURE1_8 = IMAGES.pinataEvent;

export default function Games() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-20 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Play & create</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>Games</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── INTRO BANNER ── */}
      <section style={{ backgroundColor: "#F5F0EB", borderBottom: "2.5px solid #0F1B2D", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="container" style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Germination Games</div>
          <h2 className="display-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>Stories Through Play</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)" }}>
            Through interactive apps and thoughtful games, we bring storytelling to life in playful, accessible ways — guided by the belief that great stories should be experienced, not just told.
          </p>
        </div>
      </section>

      {/* ── STORYGROW ── */}
      <section style={{ backgroundColor: "white", paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: "inline-block", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(-2deg)", boxShadow: "3px 3px 0 #0F1B2D", marginBottom: "1.25rem" }}>
                Germination Game #1
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>StoryGrow</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
                Grow stories with this collaborative story pass writing game. Draw fertilizer cards to add in challenges.
              </p>
              <ul style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem", paddingLeft: "1.25rem", listStyleType: "disc" }}>
                <li>Stories made fun — you pick the person, problem, place</li>
                <li>Flex your creativity, humor, and problem-solving skills</li>
                <li>Roll the die to add in story elements</li>
              </ul>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1.75rem" }}>
                Story Grow is a fun way to create stories as a group and flex your creative muscles.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.thegamecrafter.com/games/story-grow" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline">Buy StoryGrow →</a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "8px 8px 0 #E8531D", overflow: "hidden", height: "340px", backgroundColor: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/images/germination-games-logo.png" alt="Germination Games - StoryGrow" className="w-full h-full object-contain" style={{ display: "block", padding: "1rem" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#E8531D" />
        </svg>
      </div>

      {/* ── COMMUNITY ACTION DECK ── */}
      <section style={{ backgroundColor: "#E8531D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={{ position: "relative" }}>
              <div style={{ border: "2.5px solid white", boxShadow: "8px 8px 0 #0F1B2D", overflow: "hidden", height: "340px", backgroundColor: "#fff8e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={COMMUNITY_ACTION} alt="Community Action Deck" className="w-full h-full object-contain" style={{ display: "block", padding: "1rem" }} />
              </div>
            </div>
            <div>
              <div style={{ display: "inline-block", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(2deg)", boxShadow: "3px 3px 0 #0F1B2D", marginBottom: "1.25rem" }}>
                Germination Game #2
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white" }}>Community<br />Action Deck</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "1rem" }}>
                The Community Action deck can help you engage with your local community. There are eight categories of prompts:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.25rem 1.5rem", marginBottom: "1rem" }}>
                {["Personal", "History & Art", "Environment", "Communities", "Create", "Play", "Events", "Communication"].map((cat) => (
                  <p key={cat} style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)" }}>• {cat}</p>
                ))}
              </div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "1.75rem" }}>
                Each category provides a different entry point into connecting with your community. When used together, they create a holistic community engagement approach.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.thegamecrafter.com/games/community-action-deck" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-yellow no-underline">Buy the Deck →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT GERMINATION GAMES ── */}
      <section style={{ backgroundColor: "#F5F0EB", borderTop: "2.5px solid #0F1B2D", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="text-center mb-6">
            <div className="script-label mb-2" style={{ color: "#1A8C7A" }}>Our philosophy</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>About Germination Games</h2>
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.6, color: "rgba(15,27,45,0.75)" }}>
            Germination Games supports participants to be creators, not victims. When people face existential threats like climate change, they often hunker down in their old ways of thinking. Just when we need skills like creativity, broadening perspectives, and problem-solving, we tend to be most rigid. Germination Games are designed to examine wicked problems in new ways, engage people as active participants in real-world problems, and serve as a catalyst for action.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.6, color: "rgba(15,27,45,0.75)", marginTop: "1.5rem" }}>
            Some of the benefits of games include reducing stress, enhancing cognitive abilities, getting away from screens, and forming connections with others. Current Projects for Germination Games include a Story Grow Game to explore challenging situations through collaborative storytelling. Participants bring in multiple perspectives and cross-generational storytelling to develop problem-solving skills within a story structure. With the Community Action Deck, participants draw cards to engage with their cities.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.6, color: "rgba(15,27,45,0.75)", marginTop: "1.5rem" }}>
            Germination Games cultivate the process of bringing new ideas into existence. Instead of being stuck in despair, participants play games to create new possible futures.
          </p>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#F5F0EB", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── VIDEO DEMOS ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>See them in action</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Game Promos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* StoryGrow video */}
            <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "5px 5px 0 #E8531D", overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src="https://www.youtube.com/embed/QRk66DYpmcs"
                  title="StoryGrow Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div style={{ padding: "1.25rem", borderTop: "2.5px solid #0F1B2D", backgroundColor: "white", textAlign: "center" }}>
                <h3 className="display-heading" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>Story Grow</h3>
              </div>
            </div>
            {/* Community Action Deck video */}
            <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "5px 5px 0 #0F1B2D", overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src="https://www.youtube.com/embed/zzlzqW9ddSE"
                  title="Community Action Deck Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div style={{ padding: "1.25rem", borderTop: "2.5px solid #0F1B2D", backgroundColor: "white", textAlign: "center" }}>
                <h3 className="display-heading" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>Community Action Deck</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      {/* ── RIDERS & WALKERS ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ alignItems: "stretch" }}>
            <div className="flex flex-col">
              <div style={{ display: "inline-block", backgroundColor: "#1A8C7A", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(-2deg)", boxShadow: "3px 3px 0 rgba(255,255,255,0.3)", marginBottom: "1.25rem", alignSelf: "flex-start" }}>
                Game Development
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}>Riders &amp; Walkers Safety Game</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
                <strong style={{ color: "white" }}>Riders and Walkers</strong> is an interactive, multi-media presentation created by Torran Anderson and the <a href="http://www.eeexchange.org/rwprogram" target="_blank" rel="noopener noreferrer" style={{ color: "#F5C842", textDecoration: "underline" }}>Environmental Education Exchange</a> for third-grade classrooms across Pima County. During this 60-minute presentation, student teams help Sofia and Santiago safely navigate their route to school by bike and on foot.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem" }}>
                The presenter guides students through a Chutes &amp; Ladders-inspired game that reviews pedestrian and bicycle safety skills and builds enthusiasm to get students ready to ride and walk.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "1.5rem" }}>
                <a href="https://saferoutestucson.org/riders-walkers-program/" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline">View Program →</a>
                <a href="http://www.eeexchange.org/rwprogram" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline-white no-underline">EE Exchange</a>
              </div>
              <div className="flex flex-col gap-4" style={{ marginTop: "auto" }}>
                {[
                  { title: "It's interactive.", desc: "The presenter covers content in an engaging and relatable way through a large magnetic game board, videos and photos featuring Tucson-area neighborhoods, and team exercises." },
                  { title: "It's curriculum-based.", desc: "Created to meet Arizona Department of Education standards for third-grade students. Teachers receive pre-visit activity ideas and vocabulary lists." },
                  { title: "It promotes walking and biking.", desc: "Presentations encourage students to consider the joys of foot-powered travel while focusing on key, age-appropriate safety messages." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E8531D", marginTop: "0.4rem", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em", color: "white", marginBottom: "0.2rem" }}>{item.title}</p>
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4" style={{ justifyContent: "center" }}>
              <div style={{ flex: "1 1 0", minHeight: "200px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                <img src="/images/riders-walkers-classroom.png" alt="Riders and Walkers in classroom" className="w-full h-full object-cover object-center" />
              </div>
              <div style={{ flex: "1 1 0", minHeight: "200px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                <img src="/images/riders-walkers-board.png" alt="Riders and Walkers game board" className="w-full h-full object-contain" style={{ backgroundColor: "#1a2a3d" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", marginBottom: "-1px" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="#F5C842" />
        </svg>
      </div>

      {/* ── CTA BAND ── */}
      <section style={{ backgroundColor: "#F5C842", borderBottom: "2.5px solid #0F1B2D", padding: "3rem 0" }}>
        <div className="container text-center">
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Bring it to your community</div>
          <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>Want to Use These Games<br />in Your Workshop?</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/workshops" className="btn-pill btn-pill-navy no-underline">Explore Workshops</a>
            <a href="/contact" className="btn-pill btn-pill-outline no-underline">Get in Touch</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
