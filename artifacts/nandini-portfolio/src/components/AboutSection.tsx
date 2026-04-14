import profilePic from "/nandini.jpeg";

const skills = [
  { name: "News Article Writing", level: 92 },
  { name: "Blog & Feature Writing", level: 88 },
  { name: "Newspaper Designing", level: 85 },
  { name: "Interview Hosting", level: 90 },
  { name: "Adobe InDesign & Photoshop", level: 80 },
  { name: "Content Marketing & SEO", level: 82 },
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
    <div style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-stone-600">{name}</span>
        <span className="text-xs text-amber-700 font-mono font-medium">{level}%</span>
      </div>
      <div className="h-1 bg-stone-200 rounded-full relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400"
          style={{ width: `${level}%`, transition: "width 1.5s ease" }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 90% 80%) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">The Person Behind the Lens</span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800">
            About <span className="gold-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="reveal-left relative">
            <div className="relative inline-block w-full max-w-md mx-auto">
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-amber-400" />

              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-stone-100">
                <img
                  src={profilePic}
                  alt="Nandini Agarwal"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-6 top-1/3 bg-white border border-stone-200 shadow-xl rounded-xl p-4 float">
                <div className="text-xs text-stone-400 tracking-widest uppercase mb-1">Experience</div>
                <div className="text-2xl font-serif gold-text font-bold">3 Yrs</div>
                <div className="text-xs text-stone-400 mt-1">in Media</div>
              </div>

              <div className="absolute -left-6 bottom-1/4 bg-white border border-stone-200 shadow-xl rounded-xl p-4 float" style={{ animationDelay: "2s" }}>
                <div className="text-xs text-stone-400 tracking-widest uppercase mb-1">Published</div>
                <div className="text-2xl font-serif text-rose-500 font-bold">20+</div>
                <div className="text-xs text-stone-400 mt-1">Articles</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right space-y-8">
            <div>
              <h3 className="text-3xl font-serif text-stone-800 mb-4">
                A Storyteller at Heart,{" "}
                <span className="gold-text">a Journalist by Craft</span>
              </h3>
              <p className="text-stone-500 leading-relaxed mb-4">
                I'm Nandini Agarwal — a journalism graduate from IMS Ghaziabad with a passion for
                crafting stories that resonate, inform, and inspire. My journey in media spans
                digital news writing, print newspaper design, interview hosting, and multimedia production.
              </p>
              <p className="text-stone-500 leading-relaxed">
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
                <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                  <div className="text-xs text-stone-400 tracking-widest uppercase mb-1">{item.label}</div>
                  <div className="text-sm text-stone-700 font-medium break-all">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              <h4 className="text-sm tracking-widest uppercase text-stone-400 mb-6 font-semibold">Core Competencies</h4>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>

        {/* Skill badges */}
        <div className="reveal mt-20">
          <h4 className="text-sm tracking-widest uppercase text-stone-400 mb-8 text-center font-semibold">Skills & Tools</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {skillBadges.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border border-stone-200 rounded-full text-stone-500 bg-white hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 cursor-default shadow-sm"
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
