const chapters = [
  {
    number: "01",
    title: "The Evolution of Journalism in the Digital Age",
    color: "#b45309",
    bg: "#fef3c7",
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
    color: "#7c3aed",
    bg: "#ede9fe",
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
    <section id="publications" className="relative py-32 overflow-hidden" style={{ background: "hsl(38 40% 97%)" }}>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(260 80% 80%) 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">Academic Work</span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800">
            <span className="gold-text">Publications</span>
          </h2>
        </div>

        {/* Book banner */}
        <div className="reveal mb-16">
          <div className="relative bg-white border border-stone-200 rounded-3xl p-8 md:p-12 overflow-hidden shadow-sm">
            {/* Animated orb */}
            <div className="absolute right-0 top-0 bottom-0 w-64 opacity-15 flex items-center justify-center pointer-events-none">
              <div
                className="w-48 h-48 rounded-full float"
                style={{
                  background: "radial-gradient(circle at 35% 35%, hsl(42 90% 70%), hsl(35 85% 42%) 40%, hsl(260 70% 60%))",
                  boxShadow: "0 0 60px hsl(35 85% 42% / 0.4)",
                }}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-rose-400 to-transparent" />

            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-amber-700 text-sm font-semibold">Book Chapter Author</span>
                <span className="text-stone-400 text-xs">· Under Editorial Review</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4 leading-tight">
                Reporting the Future:<br />
                <span className="gold-text">Journalism in the Digital Age</span>
              </h3>

              <p className="text-stone-500 leading-relaxed mb-6">
                Author of two chapters currently under editorial review by professors and contributors. My work
                explores the evolution of journalism — from print to digital media — and the effectiveness of
                the digital advertising ecosystem.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-700 font-medium">📖 2 Chapters Authored</span>
                <span className="px-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-500">🎓 Under Editorial Review</span>
                <span className="px-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-500">🏛️ Academic Publication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="grid md:grid-cols-2 gap-8 stagger reveal">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-white border border-stone-200 rounded-2xl p-8 card-glow group relative overflow-hidden shadow-sm"
            >
              {/* Background number */}
              <div
                className="absolute -right-4 -top-4 text-[120px] font-serif font-bold opacity-[0.04] leading-none select-none"
                style={{ color: chapter.color }}
              >
                {chapter.number}
              </div>

              <div className="absolute top-0 left-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:w-full"
                style={{ width: "40%", backgroundColor: chapter.color }} />

              <div className="relative">
                <div
                  className="text-xs font-semibold mb-4 px-3 py-1 rounded-full w-fit"
                  style={{ color: chapter.color, backgroundColor: chapter.bg, border: `1px solid ${chapter.color}30` }}
                >
                  Chapter {chapter.number}
                </div>

                <h4 className="text-xl font-serif text-stone-800 mb-4 leading-tight group-hover:text-stone-600 transition-colors">
                  "{chapter.title}"
                </h4>

                <p className="text-stone-500 text-sm leading-relaxed mb-6">{chapter.description}</p>

                <div className="space-y-2">
                  <div className="text-xs text-stone-400 tracking-widest uppercase mb-3 font-semibold">Key Highlights</div>
                  {chapter.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-sm text-stone-500">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: chapter.color }} />
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
