const awards = [
  {
    title: "Best Research Paper Award",
    event: "6th International Conference",
    organizer: "IMS Ghaziabad UCC",
    icon: "🏆",
    color: "#f59e0b",
    description: "Honored with the Best Research Paper Award at the prestigious international conference, recognizing excellence in academic research.",
    rank: 1,
  },
  {
    title: "First Prize — Short Film",
    event: '"Umeed Aur Uljhan"',
    organizer: "Film Production",
    icon: "🥇",
    color: "#f59e0b",
    description: "Our team was awarded first prize for the short film on student life, where I contributed as actor and voice-over artist.",
    rank: 1,
  },
  {
    title: "Third Prize — Documentary",
    event: '"Our Delhi, Our Pride"',
    organizer: "Documentary Production",
    icon: "🥉",
    color: "#cd7f32",
    description: "Our team was awarded third prize for this documentary on Delhi's pollution crisis, where I contributed as a researcher.",
    rank: 3,
  },
];

const achievements = [
  {
    icon: "📰",
    number: "20+",
    label: "Published Articles",
    detail: "Across digital and print platforms, maintaining editorial quality and deadline adherence.",
    color: "#f59e0b",
  },
  {
    icon: "🗞️",
    number: "10+",
    label: "Newspaper Layouts",
    detail: "Successfully balancing text and visuals for both print and digital formats.",
    color: "#a855f7",
  },
  {
    icon: "🎙️",
    number: "10+",
    label: "Industry Interviews",
    detail: "Conducted with leading professionals, producing high-quality feature stories.",
    color: "#22c55e",
  },
  {
    icon: "📚",
    number: "2",
    label: "Book Chapters",
    detail: "Authored in an academic book on digital journalism, currently under editorial review.",
    color: "#f59e0b",
  },
  {
    icon: "🎬",
    number: "3",
    label: "Film Productions",
    detail: "Contributed as voice-over artist, actor, and researcher in short films and documentaries.",
    color: "#ef4444",
  },
  {
    icon: "🎓",
    number: "5+",
    label: "Certifications",
    detail: "Including FTII Pune certifications in short film production and multi-camera operations.",
    color: "#06b6d4",
  },
];

function AwardCard({ award }: { award: typeof awards[0] }) {
  return (
    <div
      className="relative bg-[hsl(220_18%_10%)] border rounded-2xl p-8 card-glow group overflow-hidden"
      style={{ borderColor: `${award.color}30` }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: award.color }}
      />

      <div className="relative">
        <div className="text-5xl mb-4">{award.icon}</div>

        <h3
          className="text-xl font-serif mb-2 transition-colors"
          style={{ color: award.color }}
        >
          {award.title}
        </h3>
        <div className="text-white/80 font-medium mb-1">{award.event}</div>
        <div className="text-white/40 text-sm mb-4">{award.organizer}</div>

        <p className="text-white/50 text-sm leading-relaxed">{award.description}</p>
      </div>
    </div>
  );
}

export function AwardsSection() {
  return (
    <section id="awards" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(220_20%_6%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[hsl(38_92%_50%_/_0.03)] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[hsl(38_92%_50%)] mb-4 block">Recognition & Impact</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            Awards & <span className="gold-text">Achievements</span>
          </h2>
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 stagger reveal">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>

        {/* Key Achievements */}
        <div className="reveal">
          <h3 className="text-2xl font-serif text-white/60 mb-10">Key Milestones</h3>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="group bg-[hsl(220_18%_10%)] border border-white/5 rounded-xl p-6 card-glow hover:border-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: `${achievement.color}15` }}
                  >
                    {achievement.icon}
                  </div>
                  <div>
                    <div
                      className="text-2xl font-serif font-bold mb-0.5"
                      style={{ color: achievement.color }}
                    >
                      {achievement.number}
                    </div>
                    <div className="text-white/80 font-medium text-sm mb-2">{achievement.label}</div>
                    <p className="text-white/40 text-xs leading-relaxed">{achievement.detail}</p>
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
                    <span className="text-white/20 text-sm tracking-widest uppercase whitespace-nowrap">
                      {text}
                    </span>
                    <span className="text-[hsl(38_92%_50%)] text-xs">✦</span>
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
