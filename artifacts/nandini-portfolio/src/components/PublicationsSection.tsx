
const chapters = [
  {
    number: "01",
    title: "The Evolution of Journalism in the Digital Age",
    color: "#f59e0b",
    highlights: [
      "Traces the transition from print to digital media",
      "Examines shifts in news production, dissemination, and consumption",
      "Explores how print media was once the sole source of news",
      "Analyzes the rapid transformation of the media landscape",
      "Covers digital-first newsroom practices",
    ],
    description:
      "This chapter explores the transition of journalism from print to digital media, highlighting how the process of news production, dissemination, and consumption has changed over time. It examines how print media was only the source of news and information but today the media landscape has transformed very rapidly.",
  },
  {
    number: "02",
    title: "AI and the Effectiveness of Digital Advertising Ecosystem",
    color: "#a855f7",
    highlights: [
      "Growing role of AI in digital marketing",
      "Challenges AI poses to the digital marketing economy",
      "Future of the industry as AI continues to evolve",
      "Impact on advertising effectiveness and targeting",
      "Reshaping the digital ecosystem",
    ],
    description:
      "This chapter examines the growing need of AI in digital marketing, the challenges it poses to the digital marketing economy, and the future of the industry as AI continues to evolve and reshape it.",
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_18%_8%)] to-[hsl(220_20%_6%)]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[hsl(38_92%_50%_/_0.05)] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[hsl(38_92%_50%)] mb-4 block">Academic Work</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            <span className="gold-text">Publications</span>
          </h2>
        </div>

        {/* Book banner */}
        <div className="reveal mb-16">
          <div className="relative bg-gradient-to-br from-[hsl(220_18%_12%)] to-[hsl(220_18%_8%)] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Animated orb background */}
            <div className="absolute right-0 top-0 bottom-0 w-64 opacity-30 flex items-center justify-center pointer-events-none">
              <div
                className="w-40 h-40 rounded-full float"
                style={{
                  background: "radial-gradient(circle at 35% 35%, hsl(42 95% 70%), hsl(38 92% 50%) 40%, hsl(280 60% 50%))",
                  boxShadow: "0 0 60px hsl(38 92% 50% / 0.6), 0 0 120px hsl(38 92% 50% / 0.2)",
                }}
              />
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(38_92%_50%)] via-[hsl(280_60%_65%)] to-transparent" />

            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[hsl(38_92%_50%_/_0.1)] border border-[hsl(38_92%_50%_/_0.3)] rounded-full">
                <svg className="w-4 h-4 text-[hsl(38_92%_50%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-[hsl(38_92%_50%)] text-sm font-medium">Book Chapter Author</span>
                <span className="text-white/30 text-xs">· Under Editorial Review</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                Reporting the Future:<br />
                <span className="gold-text">Journalism in the Digital Age</span>
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                I am the author of two chapters in this academic book, currently under editorial review by
                professors and other contributors. My work explores the evolution of journalism, tracing its
                journey from print to digital media and the effectiveness of the digital advertising ecosystem.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/50">
                  📖 2 Chapters Authored
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/50">
                  🎓 Under Editorial Review
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/50">
                  🏛️ Academic Publication
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="grid md:grid-cols-2 gap-8 stagger reveal">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-[hsl(220_18%_10%)] border border-white/5 rounded-2xl p-8 card-glow group relative overflow-hidden"
            >
              {/* Background number */}
              <div
                className="absolute -right-4 -top-4 text-[120px] font-serif font-bold opacity-5 leading-none select-none"
                style={{ color: chapter.color }}
              >
                {chapter.number}
              </div>

              {/* Color top border */}
              <div
                className="absolute top-0 left-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:w-full"
                style={{ width: "40%", backgroundColor: chapter.color }}
              />

              <div className="relative">
                <div
                  className="text-xs font-mono mb-4 px-3 py-1 rounded-full w-fit"
                  style={{
                    color: chapter.color,
                    backgroundColor: `${chapter.color}15`,
                    borderWidth: 1,
                    borderColor: `${chapter.color}30`,
                  }}
                >
                  Chapter {chapter.number}
                </div>

                <h4 className="text-xl font-serif text-white mb-4 leading-tight group-hover:text-[hsl(38_92%_50%)] transition-colors">
                  "{chapter.title}"
                </h4>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {chapter.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs text-white/30 tracking-widest uppercase mb-3">Key Highlights</div>
                  {chapter.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: chapter.color }} />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
