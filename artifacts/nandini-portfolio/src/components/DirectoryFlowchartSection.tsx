const directoryText = `artifacts/nandini-portfolio/
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ components/
│     ├─ HeroSection.tsx
│     ├─ AboutSection.tsx
│     ├─ ExperienceSection.tsx
│     ├─ ProjectsSection.tsx
│     ├─ PublicationsSection.tsx
│     ├─ AwardsSection.tsx
│     ├─ ContactSection.tsx
│     ├─ Navbar.tsx
│     ├─ FloatingParticles.tsx
│     └─ CustomCursor.tsx
├─ public/
│  └─ nandini.jpeg
├─ index.html
└─ vite.config.ts`;

export function DirectoryFlowchartSection() {
  return (
    <section id="directory-flowchart" className="relative py-24 overflow-hidden" style={{ background: "hsl(38 40% 97%)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="reveal mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">Project Structure</span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-800">
            Directory <span className="gold-text">Flowchart</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-2xl">
            A text-based map of how the portfolio files are organized.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm card-glow overflow-x-auto">
          <pre className="font-mono text-sm md:text-base leading-7 text-stone-600 whitespace-pre min-w-max">
            {directoryText}
          </pre>
        </div>
      </div>
    </section>
  );
}
