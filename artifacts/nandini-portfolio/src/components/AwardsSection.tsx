const awards = [
  {
    title: "Best Research Paper Award",
    event: "6th International Conference",
    organizer: "IMS Ghaziabad UCC",
    icon: "🏆",
    color: "#b45309",
    bg: "#fef3c7",
    description: "Honored with the Best Research Paper Award at the prestigious international conference, recognizing excellence in academic research.",
  },
  {
    title: "First Prize — Short Film",
    event: '"Umeed Aur Uljhan"',
    organizer: "Film Production",
    icon: "🥇",
    color: "#b45309",
    bg: "#fef3c7",
    description: "Our team was awarded first prize for the short film on student life, where I contributed as actor and voice-over artist.",
  },
  {
    title: "Third Prize — Documentary",
    event: '"Our Delhi, Our Pride"',
    organizer: "Documentary Production",
    icon: "🥉",
    color: "#92400e",
    bg: "#fde68a",
    description: "Our team was awarded third prize for this documentary on Delhi's pollution crisis, where I contributed as a researcher.",
  },
];

const achievements = [
  { icon: "📰", number: "20+", label: "Published Articles", detail: "Across digital and print platforms with editorial quality.", color: "#b45309" },
  { icon: "🗞️", number: "10+", label: "Newspaper Layouts", detail: "Balancing text and visuals for print and digital formats.", color: "#be185d" },
  { icon: "🎙️", number: "10+", label: "Industry Interviews", detail: "With leading professionals, producing feature stories.", color: "#7c3aed" },
  { icon: "📚", number: "2", label: "Book Chapters", detail: "In an academic book on digital journalism, under editorial review.", color: "#b45309" },
  { icon: "🎬", number: "3", label: "Film Productions", detail: "As voice-over artist, actor, and researcher.", color: "#dc2626" },
  { icon: "🎓", number: "5+", label: "Certifications", detail: "Including FTII Pune certifications in film production.", color: "#0891b2" },
];

export function AwardsSection() {
  return (
    <section id="awards" className="relative py-32 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, hsl(38 90% 60%) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">Recognition & Impact</span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800">
            Awards & <span className="gold-text">Achievements</span>
          </h2>
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 stagger reveal">
          {awards.map((award) => (
            <div
              key={award.title}
              className="relative bg-white border border-stone-200 rounded-2xl p-8 card-glow group overflow-hidden shadow-sm"
              style={{ borderTopColor: award.color, borderTopWidth: 3 }}
            >
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: award.color }} />
              <div className="text-4xl mb-4">{award.icon}</div>
              <h3 className="text-xl font-serif mb-2 font-semibold" style={{ color: award.color }}>{award.title}</h3>
              <div className="text-stone-700 font-medium mb-1">{award.event}</div>
              <div className="text-stone-400 text-sm mb-4">{award.organizer}</div>
              <p className="text-stone-500 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="reveal">
          <h3 className="text-2xl font-serif text-stone-400 mb-10">Key Milestones</h3>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="group bg-white border border-stone-200 rounded-xl p-6 card-glow shadow-sm hover:border-stone-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: `${a.color}12` }}>
                    {a.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold mb-0.5" style={{ color: a.color }}>{a.number}</div>
                    <div className="text-stone-800 font-semibold text-sm mb-2">{a.label}</div>
                    <p className="text-stone-400 text-xs leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="reveal mt-20 overflow-hidden">
          <div className="marquee-inner py-4">
            {[...Array(2)].map((_, arrI) => (
              <span key={arrI} className="inline-flex items-center gap-8">
                {[
                  "Best Research Paper Award",
                  "6th International Conference",
                  "First Prize Short Film",
                  "Umeed Aur Uljhan",
                  "Third Prize Documentary",
                  "Our Delhi Our Pride",
                  "20+ Published Articles",
                  "FTII Pune Certified",
                ].map((text) => (
                  <span key={text} className="inline-flex items-center gap-8 mr-8">
                    <span className="text-stone-300 text-sm tracking-widest uppercase whitespace-nowrap">{text}</span>
                    <span className="text-amber-400 text-xs">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
