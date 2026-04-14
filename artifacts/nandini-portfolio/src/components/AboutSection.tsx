import profilePic from "/nandini.jpeg";

const skills = [
  { name: "News Article Writing", level: 92 },
  { name: "Blog & Feature Writing", level: 88 },
  { name: "Newspaper Designing", level: 85 },
  { name: "Interview Hosting", level: 90 },
  { name: "Adobe InDesign & Photoshop", level: 80 },
  { name: "Content Marketing & SEO", level: 82 },
  { name: "Voice Over & Film Production", level: 75 },
  { name: "Data Research & Fact-Checking", level: 87 },
];

const skillBadges = [
  "News Writing", "Blog Writing", "Newspaper Design",
  "Interview Hosting", "Voice Over", "Short Film Production",
  "Adobe InDesign", "Photoshop", "SEO Optimization",
  "Content Marketing", "Social Media", "Public Relations",
  "Fact-Checking", "MS Office", "Research",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="group" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/70">{name}</span>
        <span className="text-xs text-[hsl(38_92%_50%)] font-mono">{level}%</span>
      </div>
      <div className="h-px bg-white/10 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[hsl(38_92%_50%)] to-[hsl(280_60%_65%)]"
          style={{
            width: `${level}%`,
            transition: "width 1.5s ease",
          }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_20%_6%)] via-[hsl(220_18%_8%)] to-[hsl(220_20%_6%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(38_92%_50%_/_0.04)] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[hsl(38_92%_50%)] mb-4 block">The Person Behind the Lens</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            About <span className="gold-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + decorative */}
          <div className="reveal-left relative">
            {/* Frame */}
            <div className="relative inline-block w-full max-w-md mx-auto">
              {/* Decorative corner frames */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[hsl(38_92%_50%)]" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[hsl(38_92%_50%)]" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[hsl(220_18%_12%)]">
                <img
                  src={profilePic}
                  alt="Nandini Agarwal"
                  className="w-full h-full object-cover object-center"
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_6%_/_0.6)] via-transparent to-[hsl(38_92%_50%_/_0.1)] mix-blend-multiply" />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-6 top-1/3 bg-[hsl(220_18%_10%)] border border-[hsl(38_92%_50%_/_0.3)] rounded-xl p-4 shadow-2xl float">
                <div className="text-xs text-white/40 tracking-widest uppercase mb-1">Experience</div>
                <div className="text-2xl font-serif gold-text font-bold">3 Yrs</div>
                <div className="text-xs text-white/40 mt-1">in Media</div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -left-6 bottom-1/4 bg-[hsl(220_18%_10%)] border border-[hsl(280_60%_65%_/_0.3)] rounded-xl p-4 shadow-2xl float" style={{ animationDelay: "2s" }}>
                <div className="text-xs text-white/40 tracking-widest uppercase mb-1">Published</div>
                <div className="text-2xl font-serif text-[hsl(280_60%_65%)] font-bold">20+</div>
                <div className="text-xs text-white/40 mt-1">Articles</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right space-y-8">
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">
                A Storyteller at Heart, <span className="gold-text">a Journalist by Craft</span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I'm Nandini Agarwal — a journalism graduate from IMS Ghaziabad with a passion for
                crafting stories that resonate, inform, and inspire. My journey in media spans
                digital news writing, print newspaper design, interview hosting, and multimedia
                production.
              </p>
              <p className="text-white/60 leading-relaxed">
                From sourcing news from wire agencies to designing newspaper layouts that command
                attention, I bridge the gap between editorial precision and creative visual design.
                I've hosted 10+ industry interviews, produced short films, and authored chapters
                in an academic book on digital journalism — all while still pursuing my undergraduate degree.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Delhi-NCR, India" },
                { label: "Education", value: "BJMC · IMS Ghaziabad" },
                { label: "Email", value: "nandiniagarwal0012@gmail.com" },
                { label: "Phone", value: "+91 9582001950" },
              ].map((item) => (
                <div key={item.label} className="bg-[hsl(220_18%_10%)] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-white/30 tracking-widest uppercase mb-1">{item.label}</div>
                  <div className="text-sm text-white/80 font-medium break-all">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              <h4 className="text-sm tracking-widest uppercase text-white/40 mb-6">Core Competencies</h4>
              {skills.slice(0, 5).map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>

        {/* Skill badges */}
        <div className="reveal mt-20">
          <h4 className="text-sm tracking-widest uppercase text-white/30 mb-8 text-center">Skills & Tools</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {skillBadges.map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border border-white/10 rounded-full text-white/60 hover:border-[hsl(38_92%_50%_/_0.5)] hover:text-[hsl(38_92%_50%)] transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
