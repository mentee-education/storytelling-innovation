/*
 * FeaturedProjects — Showcases CSI's creative storytelling projects
 * Each project has an embedded YouTube video and description
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";
import { Play } from "lucide-react";

const HERO_BG = IMAGES.studentsWriting;

const projects = [
  {
    title: "Legacy of Japanese Incarceration Project",
    videoId: "75wCydmr26I",
    color: "#FFD600",
    description:
      "An interactive storytelling project exploring the legacy of Japanese American incarceration during World War II. Through interviews, creative writing, and multimedia, this project preserves personal narratives and invites audiences to reflect on justice, memory, and resilience.",
  },
  {
    title: "You Bring Out the Norwegian in Me",
    videoId: "cPX8t7AuWQA",
    color: "#FF5A36",
    description:
      "A cross-cultural storytelling exchange connecting students and communities in the United States and Norway. Through collaborative writing and film, participants explore shared themes of identity, place, and belonging across borders.",
  },
  {
    title: "Remembering the River",
    videoId: "Eoy-ijTru28",
    color: "#0A1628",
    description:
      "A community-based project celebrating the Santa Cruz River and its significance to Tucson's history, ecology, and people. Through storytelling, poetry, and visual media, this project brings together diverse voices to honor the river's past and reimagine its future.",
  },
  {
    title: "Tiny Things Project",
    videoId: "t0UB204HIrE",
    color: "#E8531D",
    description:
      "An intimate storytelling initiative that invites participants to find meaning in the smallest details of everyday life. Through writing prompts, photography, and community sharing, Tiny Things reveals how small observations can spark big conversations.",
  },
];

function VideoCard({ project }: { project: typeof projects[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ border: "2px solid #0F1B2D" }}>
      {/* Video - 16:9 aspect ratio */}
      <div className="relative aspect-video" style={{ backgroundColor: "#111" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                style={{ backgroundColor: project.color }}
              >
                <Play size={24} fill="white" className="text-white ml-1" />
              </div>
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-7" style={{ backgroundColor: "white" }}>
        <div className="w-12 h-1 mb-4" style={{ backgroundColor: project.color }} />
        <h3
          className="font-barlow-condensed font-black text-2xl uppercase mb-3"
          style={{ color: "#0F1B2D", lineHeight: 1.1 }}
        >
          {project.title}
        </h3>
        <p className="font-barlow text-base leading-relaxed" style={{ color: "rgba(15,27,45,0.7)" }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <div className="min-h-screen bg-white font-barlow">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh", display: "flex", alignItems: "flex-end" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.4) 60%, rgba(15,27,45,0.2) 100%)" }}
        />
        <div className="container relative z-10 pb-14 pt-24">
          <p className="font-caveat text-[#FFD600] text-2xl mb-2">Creativity with purpose</p>
          <h1 className="font-barlow-condensed font-black text-white text-5xl md:text-7xl uppercase leading-none">
            Featured<br />Projects
          </h1>
        </div>
      </section>

      {/* Wave */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* Projects */}
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Top 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <VideoCard key={project.videoId} project={project} />
            ))}
          </div>

          {/* Mid-section text */}
          <div className="py-12" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p className="font-barlow text-base leading-relaxed text-center" style={{ color: "rgba(15,27,45,0.65)" }}>
              Torran Anderson's work extends beyond books and workshops into a range of creative projects that bring storytelling into new and engaging forms. Through collaborations with educators, organizations, and creative partners, these projects inspire curiosity, support learning, and build meaningful connections. Spanning film, interactive media, and community-based initiatives, each project reflects a commitment to creativity with purpose — inviting audiences to engage, reflect, and experience stories beyond the page.
            </p>
          </div>

          {/* Bottom 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(2).map((project) => (
              <VideoCard key={project.videoId} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ backgroundColor: "#F5F0E8", paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
          <p className="font-barlow text-lg leading-relaxed text-center" style={{ color: "rgba(15,27,45,0.75)" }}>
            Though each project is distinct, all are rooted in storytelling as an active, participatory experience. Together, they show how narrative can support learning, spark dialogue, and create lasting impact across different audiences and formats.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
