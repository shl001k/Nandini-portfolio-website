const experiences = [
  {
    role: "Content Writing Intern",
    company: "Amar Ujala Digital",
    period: "June 2025 – August 2025",
    color: "#f59e0b",
    description: "Produced reader-focused news content for high-traffic digital platforms, ensuring accuracy and editorial quality. Wrote, edited, and proofread articles for both website and print formats in a fast-paced newsroom environment.",
    highlights: [
      "High-volume digital news production",
      "Daily publishing deadlines",
      "Print & digital formats",
    ],
  },
  {
    role: "Content Writer",
    company: "News Storms",
    period: "February 2025 – April 2025",
    color: "#a855f7",
    description: "Developed engaging news stories with a strong focus on digital storytelling. Sourced and refined content from news agencies (PTI, ANI) into original, well-structured articles that contributed to increased online readership.",
    highlights: [
      "PTI & ANI wire agency sourcing",
      "Digital storytelling focus",
      "Increased online readership",
    ],
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
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_20%_6%)] to-[hsl(220_18%_8%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[hsl(38_92%_50%)] mb-4 block">Where I've Worked</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            Work <span className="gold-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(38_92%_50%_/_0.5)] via-[hsl(280_60%_65%_/_0.3)] to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal grid md:grid-cols-2 gap-8 relative ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                {/* Content */}
                <div className={`bg-[hsl(220_18%_10%)] border border-white/5 rounded-2xl p-8 card-glow ${i % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"}`}>
                  {/* Color accent */}
                  <div
                    className="w-12 h-1 rounded-full mb-6"
                    style={{ backgroundColor: exp.color }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif text-white mb-1">{exp.role}</h3>
                      <div className="text-sm font-medium" style={{ color: exp.color }}>
                        {exp.company}
                      </div>
                    </div>
                    <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full -translate-x-1/2 border-2 hidden md:block pulse-ring"
                  style={{ backgroundColor: exp.color, borderColor: exp.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-24">
          <h3 className="text-3xl font-serif text-white mb-10">
            <span className="gold-text">Education</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { degree: "Bachelor of Journalism & Mass Communication", institution: "IMS Ghaziabad", period: "2023 – 2026", grade: "BJMC" },
              { degree: "12th Grade, CBSE", institution: "Sanskar Co-Ed School", period: "2022 – 2023", grade: "CBSE" },
              { degree: "10th Grade, CBSE", institution: "Sanskar Co-Ed School", period: "2020 – 2021", grade: "CBSE" },
            ].map((edu) => (
              <div key={edu.degree} className="bg-[hsl(220_18%_10%)] border border-white/5 rounded-2xl p-6 card-glow">
                <div className="text-xs text-[hsl(38_92%_50%)] tracking-widest uppercase mb-3">{edu.grade}</div>
                <h4 className="text-white font-medium mb-2 leading-tight">{edu.degree}</h4>
                <div className="text-white/40 text-sm">{edu.institution}</div>
                <div className="text-white/30 text-xs mt-2 font-mono">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal mt-16">
          <h3 className="text-2xl font-serif text-white/60 mb-8">Certifications</h3>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-5 py-3 bg-[hsl(220_18%_10%)] border border-white/5 rounded-full card-glow group hover:border-[hsl(38_92%_50%_/_0.3)]"
              >
                <span className="text-lg">{cert.icon}</span>
                <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
