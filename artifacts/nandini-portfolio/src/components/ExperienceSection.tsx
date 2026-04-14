const experiences = [
  {
    role: "Content Writing Intern",
    company: "Amar Ujala Digital",
    period: "June 2025 – August 2025",
    color: "#b45309",
    bg: "#fef3c7",
    description: "Produced reader-focused news content for high-traffic digital platforms, ensuring accuracy and editorial quality. Wrote, edited, and proofread articles for both website and print formats in a fast-paced newsroom environment.",
    highlights: ["High-volume digital news production", "Daily publishing deadlines", "Print & digital formats"],
  },
  {
    role: "Content Writer",
    company: "News Storms",
    period: "February 2025 – April 2025",
    color: "#be185d",
    bg: "#fce7f3",
    description: "Developed engaging news stories with a strong focus on digital storytelling. Sourced and refined content from news agencies (PTI, ANI) into original, well-structured articles that contributed to increased online readership.",
    highlights: ["PTI & ANI wire agency sourcing", "Digital storytelling focus", "Increased online readership"],
  },
];

const certifications = [
  { name: "Content Marketing", icon: "📊" },
  { name: "SEO Strategies", icon: "🔍" },
  { name: "Short Film Production (FTII Pune)", icon: "🎬" },
  { name: "Multi Camera Operations (FTII Pune)", icon: "📹" },
  { name: "Research Paper Presentation", icon: "📋" },
];

export function ExperienceSection() {
  return (
    <section id="work" className="relative py-32 overflow-hidden" style={{ background: "hsl(38 40% 97%)" }}>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(340 75% 70%) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">Where I've Worked</span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800">
            Work <span className="gold-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-rose-300 to-transparent hidden md:block" />
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div key={exp.company} className={`reveal grid md:grid-cols-2 gap-8 relative ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className={`bg-white border border-stone-200 rounded-2xl p-8 card-glow shadow-sm ${i % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"}`}>
                  <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: exp.color }} />
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif text-stone-800 mb-1">{exp.role}</h3>
                      <div className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</div>
                    </div>
                    <span className="text-xs text-stone-400 rounded-full px-3 py-1 ml-4 whitespace-nowrap" style={{ backgroundColor: exp.bg }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full -translate-x-1/2 border-2 hidden md:block pulse-ring"
                  style={{ backgroundColor: exp.color, borderColor: exp.color }} />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-24">
          <h3 className="text-3xl font-serif text-stone-800 mb-10">
            <span className="gold-text">Education</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { degree: "Bachelor of Journalism & Mass Communication", institution: "IMS Ghaziabad", period: "2023 – 2026", grade: "BJMC" },
              { degree: "12th Grade, CBSE", institution: "Sanskar Co-Ed School", period: "2022 – 2023", grade: "CBSE" },
              { degree: "10th Grade, CBSE", institution: "Sanskar Co-Ed School", period: "2020 – 2021", grade: "CBSE" },
            ].map((edu) => (
              <div key={edu.degree} className="bg-white border border-stone-200 rounded-2xl p-6 card-glow shadow-sm">
                <div className="text-xs text-amber-600 tracking-widest uppercase mb-3 font-semibold">{edu.grade}</div>
                <h4 className="text-stone-800 font-medium mb-2 leading-tight">{edu.degree}</h4>
                <div className="text-stone-500 text-sm">{edu.institution}</div>
                <div className="text-stone-400 text-xs mt-2 font-mono">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal mt-16">
          <h3 className="text-2xl font-serif text-stone-500 mb-8">Certifications</h3>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-5 py-3 bg-white border border-stone-200 rounded-full card-glow shadow-sm group hover:border-amber-400"
              >
                <span className="text-lg">{cert.icon}</span>
                <span className="text-sm text-stone-600 group-hover:text-amber-700 transition-colors">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
