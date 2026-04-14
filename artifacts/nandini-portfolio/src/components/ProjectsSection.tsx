const newsArticles = [
  {
    title: "NEET-PG 2025 Postponed: Supreme Court Orders Single-Shift Exam Format",
    url: "https://imstoday.in/view/270/NEET-PG-2025-Postponed-Supreme-Court-Orders-Single-Shift-Exam-Format",
    category: "Education Policy",
    platform: "IMS Today",
  },
  {
    title: "UGC Issues Show-Cause Notice to Universities Over Anti-Ragging Rules Violation",
    url: "https://imstoday.in/view/296/UGC-Issues-Show-Cause-Notice-to-Universities-Over-Anti-Ragging-Rules-Violation",
    category: "Education",
    platform: "IMS Today",
  },
  {
    title: "DMRC Hikes Fares for Passengers for First Time After Eight Years",
    url: "https://imstoday.in/view/437/DMRC-hikes-fares-for-passengers-for-first-time-after-eight-years",
    category: "Urban Infrastructure",
    platform: "IMS Today",
  },
];

const interviews = [
  {
    guest: "Mr. Nand Kishore Aggarwal",
    title: "Pringles Pop | English 20 Sec",
    url: "https://www.youtube.com/results?search_query=Pringles+Pop+English+20+Sec",
    about: "Chairman Emeritus of the Crystal Group since its inception. A leader, visionary and mentor with a keen business acumen.",
    format: "English",
    tag: "Business Leader",
  },
  {
    guest: "Mr. Amit Pandey",
    title: "शख्सियत || IMS TODAY || Mr. Amit Pandey",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Amit+Pandey+shakhsiyat",
    about: "CEO of Orient Cables, Founder & CEO of Super77, Chief Mentor at UNNIYARCHA. Chemical engineer with rich background spanning Automobile and Telecom sectors.",
    format: "Hindi",
    tag: "Entrepreneur",
  },
  {
    guest: "Mr. Ashish Jain",
    title: "शख्सियत || IMS TODAY || Mr. Ashish Jain",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Ashish+Jain+shakhsiyat",
    about: "Deputy Director General of FIEO — Federation of Indian Export Organisations. 26+ years experience in international trade promotion, travelled to 50+ countries.",
    format: "Hindi",
    tag: "Trade Expert",
  },
  {
    guest: "Mr. Rahul Agarwal",
    title: "शख्सियत || IMS TODAY || Mr. Rahul Agrawal",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Rahul+Agrawal+shakhsiyat",
    about: "Executive Director, Ghaziabad Management Association. Ex MD & CEO of Lenovo India. Co-founder & advisory board member with 25+ years experience.",
    format: "Hindi",
    tag: "Industry Leader",
  },
  {
    guest: "Priyanshi Lal",
    title: "साक्षात्कार || IMS TODAY || Priyanshi Lal",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Priyanshi+Lal+sakshatkaar",
    about: "Alumnus of IMS Ghaziabad UCC. Currently working at DNA, Zee Group as Brand & Social Media Marketing Lead.",
    format: "Hindi",
    tag: "Media Professional",
  },
];

const films = [
  {
    title: "Umeed Aur Uljhan",
    type: "Short Film",
    subtitle: "A Short Film on Student Life",
    url: "https://www.youtube.com/results?search_query=Umeed+Aur+Uljhan+short+film+student+life",
    role: "Actor & Voice-Over Artist",
    description: "A touching short film on student life where I contributed as both an actor and voice-over artist, bringing authentic emotional depth to the narrative.",
    award: "🥇 First Prize Winner",
    color: "#f59e0b",
  },
  {
    title: "1930: A Short Film on AI",
    type: "Documentary",
    subtitle: "A Short Film on AI",
    url: "https://www.youtube.com/results?search_query=1930+short+film+AI",
    role: "Actor & Voice-Over Artist",
    description: "An exploratory documentary examining artificial intelligence through a historical lens, where I contributed acting and voice-over performances.",
    color: "#a855f7",
  },
  {
    title: "Our Delhi, Our Pride?",
    type: "Documentary",
    subtitle: "A Documentary Film on Pollution",
    url: "https://www.youtube.com/results?search_query=Our+Delhi+Our+Pride+documentary+pollution",
    role: "Researcher",
    description: "A hard-hitting documentary on Delhi's pollution crisis. Contributed extensive research work that shaped the documentary's factual foundation.",
    award: "🥉 Third Prize Winner",
    color: "#22c55e",
  },
];

function ArticleCard({ article }: { article: typeof newsArticles[0] }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[hsl(220_18%_10%)] border border-white/5 rounded-xl p-6 card-glow hover:border-[hsl(38_92%_50%_/_0.3)]"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs px-3 py-1 rounded-full bg-[hsl(38_92%_50%_/_0.1)] text-[hsl(38_92%_50%)] border border-[hsl(38_92%_50%_/_0.2)]">
          {article.category}
        </span>
        <span className="text-xs text-white/30">{article.platform}</span>
      </div>
      <h4 className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors mb-4">
        {article.title}
      </h4>
      <div className="flex items-center gap-2 text-[hsl(38_92%_50%)] text-xs group-hover:gap-3 transition-all">
        <span>Read Article</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}

function InterviewCard({ interview }: { interview: typeof interviews[0] }) {
  return (
    <a
      href={interview.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 bg-[hsl(220_18%_10%)] border border-white/5 rounded-xl p-5 card-glow hover:border-[hsl(280_60%_65%_/_0.3)] w-full"
    >
      {/* Avatar placeholder */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(280_60%_65%_/_0.3)] to-[hsl(38_92%_50%_/_0.3)] flex items-center justify-center shrink-0 text-lg font-serif text-white">
        {interview.guest.charAt(interview.guest.indexOf(" ") + 1)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate">
            {interview.guest}
          </h4>
          <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/30 ml-2 shrink-0">
            {interview.format}
          </span>
        </div>
        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{interview.about}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(280_60%_65%_/_0.1)] text-[hsl(280_60%_65%)] border border-[hsl(280_60%_65%_/_0.2)]">
            {interview.tag}
          </span>
          <span className="text-xs text-[hsl(280_60%_65%)] opacity-0 group-hover:opacity-100 transition-opacity">Watch →</span>
        </div>
      </div>
    </a>
  );
}

function FilmCard({ film }: { film: typeof films[0] }) {
  return (
    <a
      href={film.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[hsl(220_18%_10%)] border border-white/5 rounded-2xl overflow-hidden card-glow"
      style={{ borderColor: `${film.color}20` }}
    >
      {/* Color header */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${film.color}, transparent)` }}
      />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-xs px-3 py-1 rounded-full border text-xs"
            style={{
              color: film.color,
              borderColor: `${film.color}40`,
              backgroundColor: `${film.color}10`,
            }}
          >
            {film.type}
          </span>
          {film.award && (
            <span className="text-xs text-white/40">{film.award}</span>
          )}
        </div>

        <h4 className="text-xl font-serif text-white mb-2 group-hover:text-[hsl(38_92%_50%)] transition-colors">
          {film.title}
        </h4>
        <p className="text-xs text-white/30 mb-3 font-mono">{film.subtitle}</p>

        <div
          className="text-xs font-medium mb-4 px-3 py-1.5 rounded-lg w-fit"
          style={{
            color: film.color,
            backgroundColor: `${film.color}10`,
          }}
        >
          Role: {film.role}
        </div>

        <p className="text-white/50 text-sm leading-relaxed">
          {film.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: film.color }}>
          <span>Watch Film</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(220_18%_8%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[hsl(280_60%_65%_/_0.05)] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[hsl(38_92%_50%)] mb-4 block">Portfolio of Work</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            My <span className="gold-text">Projects</span>
          </h2>
        </div>

        {/* News Articles */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[hsl(38_92%_50%_/_0.1)] border border-[hsl(38_92%_50%_/_0.3)] flex items-center justify-center text-sm">
              ✍️
            </div>
            <h3 className="text-2xl font-serif text-white">News Articles</h3>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-white/30">Multi-Platform · 4 Months</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>

        {/* Interviews */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[hsl(280_60%_65%_/_0.1)] border border-[hsl(280_60%_65%_/_0.3)] flex items-center justify-center text-sm">
              🎙️
            </div>
            <h3 className="text-2xl font-serif text-white">Interview Hosting</h3>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-white/30">IMS Today · 10+ Interviews</span>
          </div>
          <p className="text-white/40 text-sm mb-6 max-w-2xl leading-relaxed">
            Managed the full interview lifecycle — research, question drafting, on-camera hosting, and post-production.
            Produced Hindi-language series <em className="text-white/60">Shakhsiyat</em> and English-format segments for IMS Today's YouTube channel.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {interviews.map((interview) => (
              <InterviewCard key={interview.guest} interview={interview} />
            ))}
          </div>
        </div>

        {/* Films */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[hsl(22_100%_60%_/_0.1)] border border-[hsl(22_100%_60%_/_0.3)] flex items-center justify-center text-sm">
              🎬
            </div>
            <h3 className="text-2xl font-serif text-white">Voice Over & Short Films</h3>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-white/30">FTII Certified Production Training</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {films.map((film) => (
              <FilmCard key={film.title} film={film} />
            ))}
          </div>
        </div>

        {/* Newspaper Design */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[hsl(160_60%_45%_/_0.1)] border border-[hsl(160_60%_45%_/_0.3)] flex items-center justify-center text-sm">
              🗞️
            </div>
            <h3 className="text-2xl font-serif text-white">Newspaper Design</h3>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-white/30">10+ Layouts · Print & Digital</span>
          </div>
          <div className="bg-[hsl(220_18%_10%)] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
              <div className="grid grid-cols-3 gap-1 h-full p-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded bg-white/10"
                    style={{ opacity: 0.3 + Math.random() * 0.7 }}
                  />
                ))}
              </div>
            </div>
            <div className="relative max-w-lg">
              <p className="text-white/60 leading-relaxed mb-6">
                Designing newspapers for both print and digital platforms, focusing on layout structuring,
                typography, and visual presentation. Work emphasizes creativity and effective design
                to enhance readability and audience reach.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Adobe InDesign", value: "Primary Tool" },
                  { label: "Adobe Photoshop", value: "Visual Editing" },
                  { label: "Layouts Designed", value: "10+" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4">
                    <div className="text-xs text-white/30 mb-1">{item.label}</div>
                    <div className="text-sm text-[hsl(160_60%_45%)] font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
