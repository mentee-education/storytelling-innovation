/*
 * Songcoming — Individual book detail page
 * Content sourced from storytellinginnovation.com/songcoming/
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = IMAGES.heroWorkshop;

const reviews = [
  {
    quote: `Gr 8 Up–A beautiful cross between a romance and fantasy story. Eve happens upon a merman named Oorin by chance at the river. Both characters are struggling to accept life's fate: Eve, a hideous betrothal; and Oorin, a lost rite of passage. As Eve copes with the death of her mother and the changes in her father, she is soothed only by her mother's singing that she hears from memory. Oorin is drawn to her humanity. Longing to fill the void of loneliness and embark on the journey to identity and independence, Eve and Oorin find themselves in a battle against external forces—Eve's father and the townspeople's beliefs in mythical beasts. Written in free verse, Anderson's writing expresses the emotional intensity of the characters' struggles through visual techniques that bring readers into this magical realm and demonstrates the power of love that unites them in this coming-of-age romantasy. Race of the characters is not mentioned; Oorin has "skin the color of wet sand." This hi-lo novel is written at a grade two to three reading level. VERDICT Teens are sure to fall in love with this fairy-tale romance.`,
    attribution: "— Reviewed by Mitzi Mack, School Library Journal",
  },
  {
    quote: `As a HI/LO book this is a really fast and easy read but it still hits emotionally with lots of open ended provocation. The tone and speed of the story builds towards the conclusion, which left me feeling a bit wrecked - in a good way! As a teacher I would use this book in my class as a teaching tool. It gives a really good entry into prediction, what is left unsaid and what is said but might mean something deeper. I love finding a book that has the dual result of leaving me, as an adult, wanting more of the story but also being something I can use as a tool for my students.`,
    attribution: "— Steph G, Educator",
  },
  {
    quote: `I loved this book! The prose was beautiful and illustrative, very clear and easy to imagine the story in my mind. The story draws you in and makes you feel all the emotions the characters feel, in a way that is easier for all readers. My favorite stanza from the book: "Please don't leave again / I've lost everything I own / -spare my empty heart" I had never encountered a Hi/Lo (high-interest, low-readability) book before this one, and I love the idea of more mature themes and stories presented in a way that's easier to understand, making it more accessible to different types of readers!`,
    attribution: "— Claire E, Reviewer",
  },
  {
    quote: `I didn't want this story to end. I wish there was more of it. Easy read about a forbidden romance and a merman!!!`,
    attribution: "— Kathleen E, Reviewer",
  },
  {
    quote: `Songcoming is a HiLo novel-in-verse that offers a poetic allure that is full of stunningly vivid imagery. The novel follows Eve, a girl who must do everything her father tells her, including marrying a man who will be just as controlling and uncaring. One day, Eve sees something in the water, of which she meets a merman named Oorin who is in his "Songcoming." This is a rite of passage for merfolk where they must remain alone until they find their song, of which seems to be either a soulmate or an actual song that offers a meaning to life. The two find affection for each other, and Eve wants nothing more than to be with Oorin. A life underwater must surely be better than the suffocating village life she currently leads. When an accident leads to a merfolk hunt, Eve knows Oorin is in danger, and she will do whatever she can to help him. The novel is beautifully poetic and even a bit heart-wrenching at times. It offers the paranormal romance element between a human and a merman, but also offers an air of realism when it comes to humans and their fear in the lack of understanding the unknown. This is a very accessible novel for teen readers that offers a harrowing lesson, but also a spark of hope.`,
    attribution: "— Teresa Crider, Review Writer",
  },
];

export default function Songcoming() {
  const [reviewIdx, setReviewIdx] = useState(0);
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO — Moonlit night sky inspired by book cover ── */}
      <section
        style={{
          position: "relative",
          minHeight: "55vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "linear-gradient(180deg, #060d1a 0%, #0b1a3a 30%, #162d5a 60%, #1a3a6a 80%, #0F1B2D 100%)",
        }}
      >
        {/* Moon glow */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "18%",
            width: "clamp(120px, 18vw, 220px)",
            height: "clamp(120px, 18vw, 220px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,248,220,0.9) 0%, rgba(255,248,220,0.3) 40%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        {/* Moon disc */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "19%",
            width: "clamp(80px, 12vw, 160px)",
            height: "clamp(80px, 12vw, 160px)",
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 35%, #fff8dc 0%, #f0e6b8 50%, #d4c98a 100%)",
            boxShadow: "0 0 60px rgba(255,248,220,0.4), 0 0 120px rgba(255,248,220,0.15)",
          }}
        />
        {/* Stars */}
        {[
          { top: "12%", left: "8%", size: 2, opacity: 0.7 },
          { top: "18%", left: "25%", size: 1.5, opacity: 0.5 },
          { top: "8%", left: "42%", size: 2.5, opacity: 0.8 },
          { top: "22%", left: "55%", size: 1, opacity: 0.4 },
          { top: "15%", left: "72%", size: 2, opacity: 0.6 },
          { top: "28%", left: "12%", size: 1.5, opacity: 0.5 },
          { top: "6%", left: "88%", size: 2, opacity: 0.7 },
          { top: "32%", left: "35%", size: 1, opacity: 0.3 },
          { top: "10%", left: "60%", size: 1.5, opacity: 0.5 },
          { top: "25%", left: "82%", size: 2.5, opacity: 0.6 },
        ].map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              backgroundColor: "#fff8dc",
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 3}px rgba(255,248,220,0.5)`,
            }}
          />
        ))}
        {/* Firefly-like warm dots */}
        {[
          { bottom: "30%", left: "10%", size: 4, opacity: 0.6 },
          { bottom: "35%", left: "22%", size: 3, opacity: 0.4 },
          { bottom: "25%", right: "15%", size: 5, opacity: 0.5 },
          { bottom: "40%", left: "45%", size: 3, opacity: 0.3 },
          { bottom: "28%", right: "30%", size: 4, opacity: 0.45 },
        ].map((dot, i) => (
          <div
            key={`f${i}`}
            style={{
              position: "absolute",
              ...dot,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              borderRadius: "50%",
              backgroundColor: "#FFD600",
              opacity: dot.opacity,
              boxShadow: `0 0 ${dot.size * 4}px rgba(255,214,0,0.6)`,
            }}
          />
        ))}
        {/* Water reflection at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "25%",
            background: "linear-gradient(to top, rgba(20,60,120,0.5) 0%, transparent 100%)",
          }}
        />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#FFD600", fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}>HI/LO Novel in Verse</div>
          <h1
            className="display-heading"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "white",
              textShadow: "0 2px 30px rgba(0,0,0,0.5)",
            }}
          >
            Songcoming
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", color: "rgba(255,248,220,0.7)", marginTop: "0.5rem", maxWidth: "500px" }}>
            A fairy-tale romance for teen readers
          </p>
        </div>
        {/* Bottom wave into white */}
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
            <div style={{ flex: "0 0 auto", width: "260px", maxWidth: "100%" }}>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #1A8C7A", overflow: "hidden", backgroundColor: "#F5F0EB" }}>
                <img
                  src={IMAGES.songcomingCover}
                  alt="Songcoming book cover"
                  style={{ width: "100%", display: "block", objectFit: "contain" }}
                />
              </div>
              {/* Buy buttons */}
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://www.amazon.com/dp/1978598319?ref=cm_sw_r_ffobk_cp_ud_dp_RA0KVMT3DNAE1NG2FW72&ref_=cm_sw_r_ffobk_cp_ud_dp_RA0KVMT3DNAE1NG2FW72&social_share=cm_sw_r_ffobk_cp_ud_dp_RA0KVMT3DNAE1NG2FW72&bestFormat=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-orange no-underline text-center"
                  style={{ fontSize: "0.85rem" }}
                >
                  Buy on Amazon
                </a>
                <a
                  href="https://west44books.com/books/songcoming/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-navy no-underline text-center"
                  style={{ fontSize: "0.85rem" }}
                >
                  West 44 Books
                </a>
                <a
                  href="https://bookshop.org/p/books/songcoming/23be3814b1509caf?ean=9781978598324&next=t"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#F5C842",
                    color: "#0F1B2D",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.65rem 1.5rem",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                    border: "2.5px solid #0F1B2D",
                    boxShadow: "3px 3px 0 #0F1B2D",
                  }}
                >
                  IndieBound.org
                </a>
                <a
                  href="https://www.barnesandnoble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "transparent",
                    color: "#0F1B2D",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.65rem 1.5rem",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                    border: "2.5px solid #0F1B2D",
                  }}
                >
                  Barnes &amp; Noble
                </a>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "transparent",
                    color: "#0F1B2D",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.65rem 1.5rem",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                    border: "2.5px solid #0F1B2D",
                  }}
                >
                  Amazon
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
                Book Summary
              </div>
              <h2 className="display-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#0F1B2D", marginBottom: "1.25rem" }}>
                About the Book
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                Eve is miserable. Little more than a servant to her father, looked down upon by fellow villagers, and promised to a man she despises, nothing about her life is of her choosing. Her days are spent with chores and the dirty garments she's hired to wash in the creek. One day, Eve spies something in the water and comes face-to-face with a merman named Oorin.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                Eve learns that he is in his Songcoming, a rite of passage in which merfolk live alone until they can find their song. Oorin is just as curious about Eve and her life on land. As they meet each morning at sunrise, they learn about each other and forge an unlikely bond. But Eve's father learns of the relationship and forbids her to return to the creek, locking her away. With her betrothed on his way to claim her, Eve must choose between a life under water where she can't breathe—and a life on land that will surely suffocate her.
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem 1.25rem",
                  backgroundColor: "#F5F0EB",
                  border: "2px solid #0F1B2D",
                  borderLeft: "5px solid #1A8C7A",
                }}
              >
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#1A8C7A", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  About HI/LO Books
                </p>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", color: "#0F1B2D", lineHeight: 1.6 }}>
                  This is a HI/LO title written in verse. HI/LO books (High-Interest, Low-Readability) are designed to include age-appropriate content tailored to mature interests that are written at a lower, accessible reading level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      {/* ── REVIEWS ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>What readers are saying</div>
          <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", marginBottom: "3rem" }}>Reviews</h2>

          <div style={{ position: "relative" }}>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderLeft: "4px solid #1A8C7A",
                padding: "2rem 2.5rem",
                minHeight: "200px",
              }}
            >
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.975rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1rem", fontStyle: "italic" }}>
                {reviews[reviewIdx].quote}
              </p>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#F5C842", letterSpacing: "0.05em" }}>
                {reviews[reviewIdx].attribution}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginTop: "1.5rem" }}>
              <button
                onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)}
                style={{ width: "40px", height: "40px", border: "2px solid rgba(255,255,255,0.3)", backgroundColor: "transparent", color: "white", fontSize: "1.2rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ←
              </button>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
                {reviewIdx + 1} / {reviews.length}
              </span>
              <button
                onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)}
                style={{ width: "40px", height: "40px", border: "2px solid rgba(255,255,255,0.3)", backgroundColor: "transparent", color: "white", fontSize: "1.2rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#1A8C7A", paddingTop: "3.5rem", paddingBottom: "3.5rem", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", marginBottom: "1rem" }}>
            Get Songcoming Today
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: "2rem" }}>
            Available now on Amazon, West 44 Books, IndieBound, and Barnes &amp; Noble.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.amazon.com/dp/1978598319?ref=cm_sw_r_ffobk_cp_ud_dp_RA0KVMT3DNAE1NG2FW72&ref_=cm_sw_r_ffobk_cp_ud_dp_RA0KVMT3DNAE1NG2FW72&social_share=cm_sw_r_ffobk_cp_ud_dp_RA0KVMT3DNAE1NG2FW72&bestFormat=true"
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
