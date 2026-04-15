const directories = [
  { name: "artifacts/nandini-portfolio/", items: ["src/", "public/", "index.html", "vite.config.ts"] },
  { name: "src/", items: ["App.tsx", "main.tsx", "index.css", "components/"] },
  { name: "components/", items: ["HeroSection.tsx", "AboutSection.tsx", "ExperienceSection.tsx", "ProjectsSection.tsx", "PublicationsSection.tsx", "AwardsSection.tsx", "ContactSection.tsx", "Navbar.tsx", "FloatingParticles.tsx", "CustomCursor.tsx"] },
  { name: "public/", items: ["nandini.jpeg"] },
];

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
            A quick visual map of how the portfolio files are organized.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[900px] flex items-center gap-6">
            {directories.map((dir, index) => (
              <div key={dir.name} className="flex items-center gap-6">
                <div className="w-64 bg-white border border-stone-200 rounded-2xl p-5 shadow-sm card-glow">
                  <div className="text-xs tracking-widest uppercase text-amber-600 mb-2 font-semibold">Folder</div>
                  <div className="font-serif text-lg text-stone-800 mb-4">{dir.name}</div>
                  <div className="space-y-2">
                    {dir.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-stone-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {index < directories.length - 1 && (
                  <div className="flex flex-col items-center gap-2 text-amber-500 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="w-24 h-px bg-gradient-to-r from-amber-300 to-amber-500" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">flow</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
